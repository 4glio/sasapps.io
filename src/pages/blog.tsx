import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { BlogIndexQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'

interface Props {
  data: BlogIndexQuery
  location: Location
}

interface TabsProps {
  location: Location
  active: 'articles' | 'feed'
}

export const BlogTabs: React.FC<TabsProps> = ({ location, active }) => (
  <ul className="nav nav-tabs justify-content-center blog-tabs">
    <li className="nav-item">
      <Link
        className={`nav-link ${active === 'articles' ? 'active' : ''}`}
        to="/blog"
      >
        Articles
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className={`nav-link ${active === 'feed' ? 'active' : ''}`}
        to="/blog/feed"
      >
        Feed
      </Link>
    </li>
  </ul>
)

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="Blog"
        customDescription="Welcome to the SAS Apps blog."
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '#' },
        ]}
      />
      <div className="container main">
        <h1 className="text-center">SAS Apps&apos; Latest News</h1>
        <p className="text-center">
          You&apos;ve reached the front page for the latest news and updates in
          the world of 4GL SAS Apps.
        </p>
        <BlogTabs location={location} active="articles" />
        <div className="row justify-content-md-center">
          {posts.map((data, i) => {
            const frontmatter = data.post?.frontmatter
            const path = frontmatter?.path || ''
            const featuredImage = frontmatter?.featuredImage
              ? getImage(frontmatter.featuredImage)
              : undefined
            return (
              <div className="col-md-6 col-xl-4" key={i}>
                <div className="blog-grid-item">
                  <Link to={path} title={frontmatter?.title}>
                    {featuredImage && (
                      <GatsbyImage
                        image={featuredImage}
                        alt={frontmatter?.title || ''}
                      />
                    )}
                  </Link>
                  <div className="content">
                    <Link style={{ boxShadow: 'none' }} to={path}>
                      <h2>{frontmatter?.title}</h2>
                    </Link>
                    <time dateTime={frontmatter?.date}>
                      {frontmatter?.date}
                    </time>
                    <p>{frontmatter?.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    remark: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
            path
            description
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
