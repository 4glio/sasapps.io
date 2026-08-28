import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import dcLogo from '../../assets/products/dc-logo.svg'
import dcName from '../../assets/products/dc-name.svg'
import jsLogo from '../../assets/products/js-logo.png'
import afsclLogo from '../../assets/products/afscl.png'

interface Props {
  location: Location
}

const Products: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="Products - pre-built SAS Apps"
        customDescription="Existing, Ready-To-Use Apps and Tools for SAS"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '#' },
        ]}
      />
      <div className="container main ">
        <h3 className="custom-heading">SAS® Apps and Technology</h3>
        <ProductItems />
      </div>
    </Layout>
  )
}

export const ProductItems: React.FC = () => (
  <div className="row buttom-margin-child">
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img
          src={dcLogo}
          alt="Data Controller for SAS"
          style={{ width: '160px', height: '160px' }}
        />
        <img
          src={dcName}
          alt="Data Controller for SAS"
          style={{ width: '243px', height: '27px' }}
        />
        <h3>Data Controller for SAS</h3>
        <p>Enable Business Users to make controlled changes to data in SAS</p>
        <a className="service-link" href="https://datacontroller.io">
          https://datacontroller.io
        </a>
        <div className="wrapper">
          <LinkButton
            path={'https://datacontroller.io'}
            label="Find Out More"
          />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img
          src={afsclLogo}
          alt="AF/SCL"
          style={{ width: '176px', height: '160px' }}
        />
        <h3> AF / SCL Kit</h3>
        <p>
          Migration tooling for rapid modernisation of monolithic AF / SCL apps
        </p>
        <a className="service-link" href="https://slides.sasjs.io/af/">
          https://4gl.io/af
        </a>
        <div className="wrapper">
          <LinkButton
            path={'https://slides.sasjs.io/af/'}
            label="Find Out More"
          />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img
          src={jsLogo}
          alt="The SASjs Framework"
          style={{ width: '163px', height: '187px' }}
        />
        <h3>The SASjs Framework</h3>
        <p>
          SASjs is a collection of open-source tools to accelerate SAS DevOps
          and the development of SAS Powered Web Applications.
        </p>
        <a className="service-link" href="https://sasjs.io">
          https://sasjs.io
        </a>
        <div className="wrapper">
          <LinkButton path={'https://sasjs.io'} label="Find Out More" />
        </div>
      </div>
    </div>
  </div>
)

export default Products
