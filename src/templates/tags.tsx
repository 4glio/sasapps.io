import { Link, graphql } from 'gatsby'
import React from 'react'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import { TagByPath } from '../../types/graphql-types'

interface Props {
  pageContext: { tag: string }
  data: TagByPath
  location: Location
}

const TagTemplate: React.FC<Props> = ({
  data,
  location,
  pageContext,
}: Props) => {
  const { tag } = pageContext
  const title = tag
  const { edges, totalCount } = data.posts
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  return (
    <div>
      <Layout location={location}>
        <Meta
          title={title}
          site={data.site?.meta}
          customDescription={`${title} | SAS Apps`}
        />
        <Breadcrum
          links={[
            { label: 'Home', to: '/' },
            { label: 'Tags', to: '/tags' },
            { label: title, to: '#' },
          ]}
        />
        <div className="container about-us">
          <h1 className="custom-heading">{tagHeader}</h1>
          <ul></ul>
          <div className="list-group list-group-flush">
            {edges.map(({ node }) => {
              const { path: slug } = node.frontmatter
              const { title } = node.frontmatter
              return (
                <Link
                  key={slug}
                  to={slug}
                  className="list-group-item list-group-item-action list-group-item-dark text-dark"
                >
                  {title}
                </Link>
              )
            })}
          </div>
          <br />
          <div className="text-center">
            <LinkButton path={'/tags'} label="All tags" />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagByPath($tag: String) {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
