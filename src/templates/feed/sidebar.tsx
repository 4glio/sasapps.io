import { Link } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

import './sidebar.scss'

export interface RecentPost {
  path: string
  title: string
}

export interface TagCount {
  name: string
  totalCount: number
}

export interface FeedPageContext {
  page?: 'index' | 'year' | 'category'
  year?: string
  tag?: string
  archives?: Record<string, number>
  recentPosts?: RecentPost[]
  tags?: TagCount[]
  numPages?: number
  currentPage?: number
}

interface SidebarProps {
  pageContext: FeedPageContext
}

const Sidebar: React.FC<SidebarProps> = ({ pageContext }) => {
  const archives = pageContext.archives || {}
  const recentPosts = pageContext.recentPosts || []
  const tags = pageContext.tags || []

  return (
    <div className="feed-sidebar">
      {recentPosts.length > 0 && (
        <div className="feed-sidebar-section">
          <h3>Recent Posts</h3>
          {recentPosts.map((post) => (
            <Link key={post.path} to={post.path} className="feed-sidebar-link">
              {post.title}
            </Link>
          ))}
        </div>
      )}
      {Object.keys(archives).length > 0 && (
        <div className="feed-sidebar-section">
          <h3>Archives</h3>
          {Object.keys(archives)
            .sort()
            .reverse()
            .map((year) => (
              <Link
                key={year}
                to={`/blog/feed/${year}/`}
                className="feed-sidebar-link"
              >
                {year} ({archives[year]})
              </Link>
            ))}
        </div>
      )}
      {tags.length > 0 && (
        <div className="feed-sidebar-section">
          <h3>Categories</h3>
          {tags.map((tag, i) => (
            <Link
              key={i}
              to={`/blog/feed/category/${kebabCase(tag.name)}/`}
              className="feed-sidebar-link"
            >
              {tag.name} ({tag.totalCount})
            </Link>
          ))}
        </div>
      )}
      <div className="feed-sidebar-section">
        <h3>Subscribe</h3>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener"
          className="feed-sidebar-link feed-rss"
        >
          RSS Feed
        </a>
      </div>
    </div>
  )
}

export default Sidebar
