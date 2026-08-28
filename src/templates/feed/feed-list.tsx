import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { siteMetadata } from '../../../gatsby-config'
import Meta from '../../components/meta/meta'
import Layout from '../../components/layout/layout'
import Breadcrum from '../../components/breadcrum/breadcrum'
import { BlogTabs } from '../../pages/blog'
import Sidebar from './sidebar'
import './feed-list.scss'

import type { FeedListQuery } from '../../../types/graphql-types'
import type { FeedPageContext } from './sidebar'

interface Props
  extends PageProps<FeedListQuery, FeedPageContext> {
  location: Location
}

const FeedListTemplate: React.FC<Props> = ({
  data,
  location,
  pageContext,
}: Props) => {
  const posts = data.remark.posts
  const meta = { ...siteMetadata, location }

  const basePath: string =
    pageContext.page === 'year'
      ? `/blog/feed/${pageContext.year}/`
      : pageContext.page === 'category'
        ? `/blog/feed/category/${kebabCase(pageContext.tag ?? '')}/`
        : `/blog/feed/`

  const pageInfo = `Page ${pageContext.currentPage} of ${pageContext.numPages}`
  const pagination = Array.from(
    { length: pageContext.numPages ?? 0 },
    (_, i) => i + 1
  ).map((pageIndex) => {
    const link = pageIndex === 1 ? basePath : `${basePath}page/${pageIndex}`
    return (
      <Link
        key={pageIndex}
        to={link}
        className={`feed-page-link ${
          pageIndex === pageContext.currentPage ? 'active' : ''
        }`}
      >
        {pageIndex}
      </Link>
    )
  })

  const heading =
    pageContext.page === 'year'
      ? `SAS Apps' Feed - ${pageContext.year}`
      : pageContext.page === 'category'
        ? `SAS Apps' Feed - ${pageContext.tag}`
        : "SAS Apps' Feed"

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title={heading}
        customDescription="Short updates and announcements from the SAS Apps team."
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: 'Feed', to: '/blog/feed' },
        ]}
      />
      <div className="container main">
        <h1 className="text-center">{heading}</h1>
        <p className="text-center">
          Short-form updates and announcements from the world of 4GL SAS Apps.
        </p>
        <BlogTabs location={location} active="feed" />
        <div className="row">
          <div className="col-md-8">
            {posts.map(({ post }, i) => {
              const frontmatter = post.frontmatter
              const path = frontmatter?.path || ''
              return (
                <div className="feed-list-item" key={i}>
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={path}
                    className="feed-list-title"
                  >
                    {frontmatter?.title}
                  </Link>
                  <time dateTime={frontmatter?.date}>
                    {frontmatter?.date}
                  </time>
                  <p>{frontmatter?.description}</p>
                  <Link className="feed-read-more" to={path}>
                    Read more →
                  </Link>
                </div>
              )
            })}
            {pageContext.numPages && pageContext.numPages > 1 && (
              <div className="feed-pagination">
                <span className="feed-pagination-links">{pagination}</span>
                <span className="feed-pagination-info float-right">
                  {pageInfo}
                </span>
              </div>
            )}
          </div>
          <div className="col-md-4">
            <Sidebar pageContext={pageContext} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FeedListTemplate

export const pageQuery = graphql`
  query FeedListQuery(
    $filter: MarkdownRemarkFilterInput!
    $skip: Int!
    $limit: Int!
  ) {
    remark: allMarkdownRemark(
      filter: $filter
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            title
            path
            description
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
