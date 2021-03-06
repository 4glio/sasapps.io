import { graphql } from 'gatsby'
import React from 'react'

import Post from './post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'
import { PostByPath } from '../../types/graphql-types'

interface Props {
  data: PostByPath
  location: Location
}

const Template: React.FC<Props> = ({ data, location }: Props) => {
  const title = data.post?.frontmatter?.title || ''
  const description = data.post?.frontmatter?.description || ''
  let featuredImg = data.post?.frontmatter.featuredImage.childImageSharp.fixed
  if (!featuredImg) featuredImg = { src: '' }

  return (
    <div>
      <Layout location={location}>
        <Meta
          title={title}
          site={data.site?.meta}
          prependtitle={false}
          previewImg={featuredImg.src}
          customDescription={description}
        />
        <Breadcrum
          links={[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: title, to: '#' },
          ]}
        />
        <div className="container">
          <Post data={data} />
        </div>
      </Layout>
    </div>
  )
}

export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
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
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
