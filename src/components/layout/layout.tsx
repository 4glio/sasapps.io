import React, { useEffect } from 'react'
import emergence from 'emergence.js'

// import Topbar from '../topbar/topbar'
import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

const matomoScript = `
var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://analytics.4gl.io/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '9']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();`

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init()
    const kwesScript = document.createElement('script')
    kwesScript.setAttribute('rel', 'noopener')
    kwesScript.setAttribute('src', 'https://kwes.io/js/kwes.js')
    document.head.appendChild(kwesScript)

    const matomoScriptTag = document.createElement('script')
    matomoScriptTag.innerText = matomoScript
    document.head.appendChild(matomoScriptTag)
  })

  return (
    <div className="site-wrapper">
      <div className="header">
        {/*<Topbar />*/}
        <Navibar title={siteMetadata.title} location={location} />
      </div>
      <div className="body-content">{children}</div>
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
