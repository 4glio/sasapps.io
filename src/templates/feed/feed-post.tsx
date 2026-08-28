import { graphql, Link } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { siteMetadata } from '../../../gatsby-config'
import Meta from '../../components/meta/meta'
import Layout from '../../components/layout/layout'
import Breadcrum from '../../components/breadcrum/breadcrum'
import Badge from '../../components/badge/badge'
import Sidebar from './sidebar'

import type { FeedPostByPath } from '../../../types/graphql-types'
import type { FeedPageContext } from './sidebar'

interface Props {
  data: FeedPostByPath
  location: Location
  pageContext: FeedPageContext
}

const FeedPostTemplate: React.FC<Props> = ({
  data,
  location,
  pageContext,
}: Props) => {
  const frontmatter = data.post?.frontmatter
  const title = frontmatter?.title || ''
  const description = frontmatter?.description || ''
  const path = frontmatter?.path || ''

  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        title={title}
        site={meta}
        prependtitle={false}
        customDescription={description}
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: 'Feed', to: '/blog/feed' },
          { label: title, to: '#' },
        ]}
      />
      <div className="container main">
        <div className="row">
          <div className="col-md-8">
            <div className="article">
              <div className="info">
                <Link style={{ boxShadow: 'none' }} to={path}>
                  <h1>{title}</h1>
                  <time dateTime={frontmatter?.date}>
                    {frontmatter?.date}
                  </time>
                </Link>
                {frontmatter?.category && (
                  <Badge label={frontmatter.category} primary={true} />
                )}
                {(frontmatter?.tags || []).map((tag, index) => (
                  <Link to={`/tags/${kebabCase(tag)}/`} key={index}>
                    <Badge label={tag as string} primary={false} />
                  </Link>
                ))}
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: data.post?.html || '',
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar pageContext={pageContext} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FeedPostTemplate

export const pageQuery = graphql`
  query FeedPostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
