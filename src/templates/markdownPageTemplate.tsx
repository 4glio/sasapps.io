import { graphql } from 'gatsby'
import React from 'react'
import { getSrc } from 'gatsby-plugin-image'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'
import { MDPageByPath } from '../../types/graphql-types'

interface Props {
  data: MDPageByPath
  location: Location
}

const MarkdownPageTemplate: React.FC<Props> = ({ data, location }: Props) => {
  const { html } = data?.markdownRemark
  const title = data.markdownRemark?.frontmatter?.title || ''
  const description = data.markdownRemark?.frontmatter?.description || ''
  // Without this the og:image falls back to the site logo SVG, which no
  // social scraper can render - so a shared page showed no image at all.
  const previewImg = data.markdownRemark?.frontmatter?.previewImg
    ? getSrc(data.markdownRemark.frontmatter.previewImg) || ''
    : ''

  return (
    <div>
      <Layout location={location}>
        <Meta
          title={title}
          site={{ ...(data.site?.meta || {}), location }}
          prependtitle={false}
          previewImg={previewImg}
          customDescription={description}
        />
        <Breadcrum
          links={[
            { label: 'Home', to: '/' },
            { label: title, to: '#' },
          ]}
        />
        <div className="container markdown-page">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    </div>
  )
}

export default MarkdownPageTemplate

export const pageQuery = graphql`
  query MDPageByPath($path: String!) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        previewImg {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  }
`
