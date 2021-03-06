import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import Button from '../components/button/button'
import Input from '..//components/input/input'

import chSvg from '../../assets/contact-help.svg'

interface Props {
  location: Location
}

const Contact: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="Contact Us"
        customDescription="Contact us to discuss ideas, proposals, and workshops"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us', to: '#' },
        ]}
      />
      <div className="container main about-us contact-us">
        <h3 className="custom-heading"></h3>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6">
            <h1>How can we help?</h1>
            <img
              src={chSvg}
              style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
              alt="How can we help?"
            />
          </div>
          <div className="col-lg-6">
            <div className="card no-button kwes-form">
              <h3>Contact Us</h3>
              <form
                method="POST"
                action="https://kwes.io/api/foreign/forms/HDiMLPhC4y8kPLpmrAtw"
                no-reload=""
              >
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  vertical={true}
                  rules="required|max:50"
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  vertical={true}
                  rules="required|email"
                />
                <Input
                  name="message"
                  label="Message"
                  placeholder="Your message here"
                  vertical={true}
                  textarea={true}
                  rules="required|max:100"
                />
                <Button type="submit" label="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
