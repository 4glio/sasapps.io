import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'

import profile1 from '../../assets/team/yury.png'
import profile2 from '../../assets/team/mihajlo.png'
import profile3 from '../../assets/team/sabir.png'
import profile4 from '../../assets/team/saad.png'
import profile5 from '../../assets/team/krishna.png'
import profile6 from '../../assets/team/Ivor.jpg'
import profile7 from '../../assets/team/allan.jpeg'
import profile8 from '../../assets/team/bena.jpeg'
import profile9 from '../../assets/team/george.jpeg'

interface Props {
  location: Location
}

const About: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="About 4GL"
        customDescription="About 4GL - Our Mission and Values"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '#' },
        ]}
      />
      <div className="container main about-us">
        <h3 className="custom-heading">Our Team</h3>
        <p className="custom-text">
          The SAS Apps team have been together (in various forms) since 2018.{' '}
          <br /> We built the SASjs Framework, Data Controller for SAS, and
          the SCL Transcoding Kit - plus numerous customer projects. <br /> You
          can engage us through your preferred SAS partner, or contact us
          directly.
        </p>
        <div className="row">
          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                className="profileImage"
                src={profile1}
                alt="Yury"
                title="Yury - Node Master"
              />
            </div>
            <p className="profile-name">Yury</p>
            <p className="profile-heading">Node Master</p>
            <p className="profile-text">
              With a nose for NodeJS and a mind for Docker, Yury blends
              technical and soft skills with a project delivery mentality one
              could describe as sailing a boat to harbour.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                className="profileImage"
                src={profile2}
                alt="Mihajlo"
                title="Mihajlo - Angular Boss"
              />
            </div>
            <p className="profile-name">Mihajlo</p>
            <p className="profile-heading">Angular Boss</p>
            <p className="profile-text ">
              A drummer and adept Angularite, Mihajlo leads development on Data
              Controller for SAS and also handles the automated testing and
              continuous integration.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                className="profileImage"
                src={profile3}
                alt="Sabir"
                title="Sabir - Captain React"
              />
            </div>
            <p className="profile-name">Sabir</p>
            <p className="profile-heading">Captain React</p>
            <p className="profile-text ">
              Sabir has the sacred ability to make things work. The lead
              developer for Sasensei.com, Sabir also contributes to the SASjs
              framework and related projects.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                src={profile4}
                className="profileImage"
                alt="Saad"
                title="Saad - Application Support Hero"
              />
            </div>
            <p className="profile-name">Saad</p>
            <p className="profile-heading">Application Support Hero</p>
            <p className="profile-text ">
              A team player with a particular superpower - the ability to do
              just about anything! Be that docker, shell scripting, windows,
              unix, JS, TS, APIs - nothing is impossible.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                src={profile5}
                className="profileImage"
                alt="Krishna"
                title="Krishna - SASjs Architect"
              />
            </div>
            <p className="profile-name">Krishna</p>
            <p className="profile-heading">SASjs Architect</p>
            <p className="profile-text ">
              Co-founder of the SASjs concept, Krishna laid the foundations for
              the SASjs Adapter, CLI, lint, vs-code extension, seed apps and
              more.{' '}
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img
                src={profile6}
                className="profileImage"
                alt="Ivor"
                title="Ivor - SAS Wizard"
              />
            </div>
            <p className="profile-name">Ivor</p>
            <p className="profile-heading">SAS Wizard</p>
            <p className="profile-text ">
              With decades of SAS and AF/SCL experience, Ivor can transform
              couldrons of legacy catalog code into lightweight, well documented
              SAS services faster than you can say PROC SPELL
            </p>
          </div>
          <div className="profile col-lg-4 col-md-6 m-auto">
            <div className="image-wrapper">
              <img
                src={profile9}
                className="profileImage"
                alt="George Bowe"
                title="George Bowe - Founder"
              />
            </div>
            <p className="profile-name">George Bowe</p>
            <p className="profile-heading">CEO</p>
            <p className="profile-text ">
              Strategically minded and carefully candid, George leads with
              impeccable ethics and audacious authenticity.
            </p>
          </div>
          <div className="profile col-lg-4 col-md-6 m-auto">
            <div className="image-wrapper">
              <img
                src={profile7}
                className="profileImage"
                alt="Allan Bowe"
                title="Allan Bowe - Founder"
              />
            </div>
            <p className="profile-name">Allan Bowe</p>
            <p className="profile-heading">Founder</p>
            <p className="profile-text ">
              When not creating actual SAS Apps,{' '}
              <a rel="me" href="https://social.4gl.io/@allan">
                Allan
              </a>{' '}
              is typically working on the tools, team, framework, and community
              that supports SAS Apps.
            </p>
          </div>
          <div className="profile col-lg-4 col-md-6 m-auto">
            <div className="image-wrapper">
              <img
                src={profile8}
                className="profileImage"
                alt="Georgina Hall"
                title="Georgina Hall - CFO"
              />
            </div>
            <p className="profile-name">Georgina Hall</p>
            <p className="profile-heading">CFO</p>
            <p className="profile-text ">
              Judicious and pragmatic, Georgina provides an honest and
              principled approach in all facets of financial management.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
