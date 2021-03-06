// import React from 'react'
// import { Link } from 'gatsby'
// import { siteMetadata } from '../../../gatsby-config'

// import Input from '../input/input'
// import SocialMedia from '../socialmedia/socialmedia'
// import analytiumSvg from '../../../assets/analytium.svg'
// import mobileSvg from '../../../assets/mobile.svg'
// import mailSvg from '../../../assets/mail.svg'
// import userSvg from '../../../assets/user.svg'

// interface Props {
//   mobile: boolean
// }

// const ContactLinks: React.FC<Props> = ({ mobile }: Props) => {
//   const classname = mobile ? 'contact-links mobile' : 'contact-links'
//   return (
//     <div className={classname}>
//       {/*<div className="mobile">
//         <a href="tel:+4402039949849">
//           <img src={mobileSvg} alt="mobile icon"/>
//           +44 (0) 203 9949 849
//         </a>
//       </div>
//       <div className="email">
//         <a href="mailto:contact@sasapps.to">
//           <img src={mailSvg} alt="mail icon"/>
//           contact@sasapps.to
//         </a>
//       </div>*/}
//       <div className="subscribe kwes-form">
//         <form
//           method="POST"
//           action="https://kwes.io/api/foreign/forms/O68mn1H8QHlz02b1VGsr"
//           no-reload=""
//           success-message="Thank you for Subscribing"
//         >
//           <Input
//             name="subscription_email"
//             label="Subscribe"
//             placeholder="Enter your email"
//             rules="required|email"
//           />
//         </form>
//       </div>
//       <div className="sociallinks">
//         <SocialMedia
//           facebook={siteMetadata.facebook}
//           linkedin={siteMetadata.linkedin}
//           twitter={siteMetadata.twitter}
//           youtube={siteMetadata.youtube}
//         />
//       </div>
//       <div className="login">
//         <span>
//           <img src={userSvg} alt="user icon" />
//           Log In
//         </span>
//       </div>
//     </div>
//   )
// }
// const Navibar: React.FC<Props> = ({ mobile }: Props) => {
//   if (mobile) return <ContactLinks mobile={true} />
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-9 col-xl-3">
//           <Link className="text-center" to="/">
//             <img
//               src={analytiumSvg}
//               alt="Analytium Logo"
//               style={{ maxWidth: '100%' }}
//             />
//           </Link>
//         </div>
//         <div className="col-xl-9">
//           <ContactLinks mobile={false} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navibar
