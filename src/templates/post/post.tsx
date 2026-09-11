import { Link } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import Badge from '../../components/badge/badge'
import { PostByPath } from '../../../types/graphql-types'

import './style.scss'

interface Props {
  data: PostByPath
}

const Post: React.FC<Props> = ({ data }: Props) => {
  const frontmatter = data.post?.frontmatter
  const path = frontmatter?.path || ''
  const html = data.post?.html || ''

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1>{frontmatter?.title}</h1>
            <time dateTime={frontmatter?.isoDate || undefined}>
              {frontmatter?.date}
            </time>
          </Link>
          <Badge label={frontmatter?.category || ''} primary={true} />
          {(frontmatter?.tags || []).map((tag, index) => (
            <Link to={`/tags/${kebabCase(tag)}/`} key={index}>
              <Badge label={tag as string} primary={false} />
            </Link>
          ))}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </div>
  )
}

export default Post
