import React from 'react';
import { Helmet } from 'react-helmet-async';
import biography from '../assets/img/Biography.png';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About | Omar ElMishad Company</title>
        <meta name="description" content="Learn more about Omar ElMishad Company — a leading creative agency blending video production, storytelling, and AI-powered innovation." />
        <meta name="keywords" content="Omar ElMishad, About, Biography, Creative Agency, Video Production, AI Storytelling" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <h1 style={{ display: 'none' }}>About Omar ElMishad</h1>
      
      <img
        src={biography}
        alt="Biography of Omar ElMishad, creative director and founder"
        loading="lazy"
        style={{ width: '100%', objectFit: 'contain', paddingTop: '6.5%', backgroundColor: 'black' }}
      />
    </div>
  );
};

export default AboutPage;
