import { Link, graphql } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import { TagsIndexQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'

interface Props {
  data: TagsIndexQuery
  location: Location
}

const TagsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = { ...siteMetadata, location }
  const { group } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="SAS Apps | Tags"
        customDescription="Site Tags for SAS Apps"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Tags', to: '#' },
        ]}
      />
      <div className="container main about-us">
        <h1 className="custom-heading">Tags</h1>
        <ul></ul>
        <div className="list-group">
          {group.map((tag) => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="list-group-item list-group-item-action list-group-item-dark text-dark"
            >
              {tag.fieldValue}
              <span className="badge badge-primary badge-pill pull-right">
                {tag.totalCount}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagsIndexQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
