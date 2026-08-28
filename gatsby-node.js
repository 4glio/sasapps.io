/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const _ = require('lodash')
const PostTemplate = path.resolve('./src/templates/template.tsx')
const PageTemplate = path.resolve('./src/templates/markdownPageTemplate.tsx')
const tagTemplate = path.resolve('./src/templates/tags.tsx')
const feedPostTemplate = path.resolve('./src/templates/feed/feed-post.tsx')
const feedListTemplate = path.resolve('./src/templates/feed/feed-list.tsx')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/about-us`,
    toPath: `/about`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: `/contact-us`,
    toPath: `/contact`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile(filter: { extension: { regex: "/md|tsx/" } }, limit: 1000) {
          edges {
            node {
              id
              name: sourceInstanceName
              path: absolutePath
              remark: childMarkdownRemark {
                id
                frontmatter {
                  path
                }
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `)
      .then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create blog posts
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        posts.forEach(({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        // Create markdown pages
        const pages = items.filter(({ node }) => /pages/.test(node.name))
        pages.forEach(({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PageTemplate,
          })
        })

        // Extract tag data from query
        const tags = data.tagsGroup.group
        // Make tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })

        // -------------------------------------------------------------------
        // Feed section (short-form updates) - mirrors datacontroller.io
        // -------------------------------------------------------------------
        return graphql(`
          {
            allMarkdownRemark(
              sort: { frontmatter: { date: DESC } }
              limit: 1000
              filter: { fileAbsolutePath: { regex: "/content/feed/" } }
            ) {
              nodes {
                id
                frontmatter {
                  title
                  path
                  date(formatString: "YYYY")
                  tags
                }
              }
              tagsGroup: group(field: { frontmatter: { tags: SELECT } }) {
                name: fieldValue
                totalCount
              }
            }
          }
        `)
      })
      .then(({ errors, data: feedData }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        const postsPerPage = 6
        const feedPosts = feedData.allMarkdownRemark.nodes
        const feedTags = feedData.allMarkdownRemark.tagsGroup
        const feedTagsFrequent = [...feedTags]
          .sort((a, b) => b.totalCount - a.totalCount)
          .slice(0, 10)
        const feedRecentPosts = feedPosts.slice(0, 10).map((p) => ({
          path: p.frontmatter.path,
          title: p.frontmatter.title,
        }))
        const feedArchives = {}
        feedPosts.forEach((d) => {
          if (feedArchives[d.frontmatter.date] == null)
            feedArchives[d.frontmatter.date] = 0
          feedArchives[d.frontmatter.date]++
        })

        const feedContext = {
          archives: feedArchives,
          recentPosts: feedRecentPosts,
          tags: feedTagsFrequent,
        }

        // Individual feed post pages
        feedPosts.forEach((post) => {
          createPage({
            path: post.frontmatter.path,
            component: feedPostTemplate,
            context: {
              path: post.frontmatter.path,
              ...feedContext,
            },
          })
        })

        // Feed index pages (paginated)
        const feedNumPages = Math.ceil(feedPosts.length / postsPerPage)
        Array.from({ length: feedNumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog/feed` : `/blog/feed/page/${i + 1}`,
            component: feedListTemplate,
            context: {
              page: 'index',
              ...feedContext,
              filter: { fileAbsolutePath: { regex: '/content/feed/' } },
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: feedNumPages,
              currentPage: i + 1,
            },
          })
        })

        // Year archive pages
        for (const year in feedArchives) {
          const count = feedArchives[year]
          const numPagesOfYear = Math.ceil(count / postsPerPage)
          Array.from({ length: numPagesOfYear }).forEach((_, i) => {
            createPage({
              path:
                i === 0
                  ? `/blog/feed/${year}/`
                  : `/blog/feed/${year}/page/${i + 1}`,
              component: feedListTemplate,
              context: {
                page: 'year',
                ...feedContext,
                filter: {
                  frontmatter: { date: { gte: year, lt: `${year}-z` } },
                  fileAbsolutePath: { regex: '/content/feed/' },
                },
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numPagesOfYear,
                currentPage: i + 1,
                year,
              },
            })
          })
        }

        // Category (tag) pages
        feedTags.forEach((tag) => {
          const count = tag.totalCount
          const numPagesOfTag = Math.ceil(count / postsPerPage)
          Array.from({ length: numPagesOfTag }).forEach((__, i) => {
            const tagPath = `/blog/feed/category/${_.kebabCase(tag.name)}/`
            createPage({
              path: i === 0 ? tagPath : `${tagPath}page/${i + 1}`,
              component: feedListTemplate,
              context: {
                page: 'category',
                ...feedContext,
                filter: {
                  frontmatter: { tags: { in: [tag.name] } },
                  fileAbsolutePath: { regex: '/content/feed/' },
                },
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numPagesOfTag,
                currentPage: i + 1,
                tag: tag.name,
              },
            })
          })
        })

        resolve()
      })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
