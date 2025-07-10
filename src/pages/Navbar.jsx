import React from 'react';
import omarlogo from '../assets/img/omarlogo.png';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <Helmet>
  <title>Omar ElMishad Company | Creative Direction & Video Production</title>
  <meta name="description" content="We offer innovative, budget-friendly creative solutions with a mature professional team. In partnership with IMAGO, we deliver cutting-edge, AI-powered video production." />
  <meta name="keywords" content="Creative Agency,creative director, Video Production, Omar El-Mishad, IMAGO, AI Video, Egypt , فيلم , سينما , فيلم قصير , مونتير , اعلان , مجاديف , نوم العازب , نسخة اصلية , كنت هنا , 2 ليمون بالنعناع" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />
  <link rel="icon" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Omar ElMishad | Director & AI Innovator" />
  <meta property="og:description" content="Creative director and IMAGO partner. Explore film, branding, and AI-powered productions." />
  <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Omar ElMishad | Director & Innovator" />
  <meta name="twitter:description" content="Explore Omar ElMishad’s work in film direction and creative production." />
  <meta name="twitter:image" content="https://yourdomain.com/preview-image.jpg" />

  {/* IMDB + ElCinema + Social Profile Links */}
  <meta property="profile:first_name" content="Omar" />
  <meta property="profile:last_name" content="ElMishad" />
  <meta property="og:see_also" content="https://m.imdb.com/name/nm10301800/" />
   <meta property="og:see_also" content="https://m.imdb.com/name/nm12577548/" />
  <meta property="og:see_also" content="https:https://elcinema.com/en/person/2318857/" />
  <meta property="og:see_also" content="https://www.youtube.com/@omelmishad"/>
  <meta property="og:see_also" content="https://www.facebook.com/Omarelmishaddirector/" />
  <meta property="og:see_also" content="https://www.linkedin.com/in/omar-el-mishad-a0935814b/" />
  <meta property="og:see_also" content="https://vimeo.com/user17977096" />
    <meta property="og:see_also" content="https://elasimah.com/126608" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.png" />


</Helmet>
      

  <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <a href="/" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      <img src={omarlogo} alt="Omar ElMishad Company Logo"/> 
      {/* <h1 className="sitename">OMC</h1> */}
    </a>
    <nav id="navmenu" className="navmenu" aria-label="Main navigation">
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><a href="/#about">Know Us</a></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><a href="/#team">Team</a></li>
       <li><Link to="/about">About</Link></li>
        <li><a href="#footer">Contacts</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
  </div>
</header>


    </div>

  )
}

export default Navbar
