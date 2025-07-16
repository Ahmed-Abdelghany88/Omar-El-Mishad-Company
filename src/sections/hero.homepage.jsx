import React from 'react'
import coverImg from "../assets/img/hero-bg.jpeg";
import coverlogo from "../assets/img/logo.png";
import '../sections/hero.css';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
<section id="hero" className="hero section dark-background">
  <img src={coverImg} alt='Hero background showing Omar El-Mishad branding'/>

<div  className="uppercontainer d-flex align-items-center">
  <div style={{position: 'relative'}} className="coverlogo">
    <img className='coverlogoimg' src={coverlogo} alt='Omar El-Mishad Company logo' /></div>
  <div className="textcontainer d-flex flex-column align-items-left">
    <h2>Omar El-Mishad Company</h2>
    <p>Where Constraints Fuel Creativity</p>
   
  </div>
   </div>
</section>{/* /Hero Section */}
    </div>
  )
}

export default Hero
