import React from 'react'
import { Helmet } from 'react-helmet'

import { siteMetadata } from '../../../types/graphql-types'

interface Props {
  site:
    | Pick<
        siteMetadata,
        | 'title'
        | 'description'
        | 'author'
        | 'twitter'
        | 'facebook'
        | 'youtube'
        | 'linkedin'
        | 'adsense'
        | 'siteUrl'
        | 'location'
      >
    | null
    | undefined
  title?: string
  prependtitle?: boolean
  previewImg?: string
  customDescription?: string
  publishedTime?: string
}

const Meta: React.FC<Props> = ({
  site,
  title,
  prependtitle = true,
  previewImg = '',
  customDescription = '',
  publishedTime = '',
}: Props) => {
  const siteTitle = site?.title || ''
  const siteUrl = site?.siteUrl || ''
  const author = site?.author || ''
  const location = site?.location || {}
  const siteDescription =
    customDescription == '' ? site?.description || '' : customDescription
  const image =
    previewImg == ''
      ? {
          og: `${siteUrl}/img/sas-apps.svg`,
          twitter: `${siteUrl}/img/sas-apps-2.png`,
        }
      : {
          og: `${siteUrl}${previewImg}`,
          twitter: `${siteUrl}${previewImg}`,
        }
  let pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  if (!prependtitle) {
    pageTitle = title
  }
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `${site?.twitter}`,
        },
        {
          name: 'twitter:image',
          content: image.twitter,
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          name: 'twitter:description',
          content: siteDescription,
        },
        {
          name: 'facebook:site',
          content: `${site?.facebook}`,
        },
        {
          name: 'youtube:site',
          content: `${site?.youtube}`,
        },
        {
          name: 'linkedin:site',
          content: `${site?.linkedin}`,
        },
        { property: 'og:title', content: pageTitle },
        {
          property: 'og:type',
          content: publishedTime ? 'article' : 'website',
        },
        {
          name: 'description',
          property: 'og:description',
          content: siteDescription,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${location.pathname}${location.hash}`,
        },
        {
          name: 'image',
          property: 'og:image',
          content: image.og,
        },
        {
          name: 'author',
          property: 'author',
          content: author,
        },
        ...(publishedTime
          ? [{ property: 'article:published_time', content: publishedTime }]
          : []),
      ]}
    />
  )
}
export default Meta
