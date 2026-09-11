import { graphql } from 'gatsby'
import React from 'react'

import { MetaQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import LinkButton from '../components/button/link-button'

import { ServiceItems } from './services'
import { SolutionItems } from './solutions'
import { ProductItems } from './products'

interface Props {
  data: MetaQuery
  location: Location
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  const meta = { ...data.site?.meta, location }

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div className="container">
        <div className="main-background">
          <h4>
            Custom Interfaces to the world&apos;s most powerful
            <span> Analytics Platform</span>
          </h4>
          <p className="heading">
            Leverage your investment in SAS&reg; with a range of solution and
            product offerings to fit your specific needs.{' '}
          </p>
          <p className="info">
            We blend decades of traditional SAS&reg; experience with open source
            technology offerings to give you well documented solutions that you
            can either maintain yourselves, or allow us to continue to support
            with a transparent range of support packages.
          </p>
          <a className="ce-badge" href="/cyber-essentials-certified/">
            <i aria-hidden="true" className="fa fa-shield" />
            Cyber Essentials Certified
          </a>
          <LinkButton path={'/products'} label="Our Products" active />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="container">
        <h1>What We Offer</h1>

        <h2 className="sub-heading">Services</h2>
        <br />
        <ServiceItems />

        <h2 className="sub-heading">Solutions</h2>
        <br />
        <SolutionItems />

        <h2 className="sub-heading">Products</h2>
        <br />
        <ProductItems />
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query MetaQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        facebook
        youtube
        linkedin
      }
    }
  }
`
