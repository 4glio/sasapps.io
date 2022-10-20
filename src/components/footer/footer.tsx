import React from 'react'

const Footer: React.FC = () => (
  <div className="footer">
    <h3 className="custom-heading">Quick Links</h3>
    <div className="content quicklinks">
      <a href="/services">Services</a>
      <a href="/solutions">Solutions</a>
      <a href="/products">Products</a>
      <a href="/contact">Contact</a>
      <a href="/about">About Us</a>
      <a href="/blog/">Blog</a>
      <a href="/slavery-statement/">Slavery Statement</a>
      <a href="/csr-policy/">CSR Policy</a>
      <a href="/ethics-policy/">Ethics Policy</a>
    </div>
    <div className="bottom">
      <p>
        Bowe IO Ltd, 29 Oldfield Rd, Windermere, Cumbria, England, LA23 2AZ.
        Company No: 08777171 VAT: 203914240
      </p>
    </div>
  </div>
)

export default Footer
