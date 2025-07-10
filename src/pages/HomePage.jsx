import React from 'react'
import coverImg from "../assets/img/hero-bg.jpeg";
import coverlogo from "../assets/img/logo.png";
import serviceImg from "../assets/img/service-all.png";
import { Navigation, Pagination ,Autoplay } from 'swiper/modules';
import working1 from '../assets/img/working-1.png';
import working2 from '../assets/img/working-2.png';
import working3 from '../assets/img/working-3.png';
import teammember3 from "../assets/img/team-3.jpg";
import teammember2 from "../assets/img/team-2.jpg";
import teammember1 from "../assets/img/team-1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet-async';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const HomePage = () => {
 

  return (
    <div>

     {/* Hero Section */}
<section id="hero" className="hero section dark-background">
  <img src={coverImg} alt='Hero background showing Omar El-Mishad branding'/>

<div  className="uppercontainer d-flex align-items-center">
  <div style={{position: 'relative'}} className="coverlogo">
    <img className='coverlogoimg' src={coverlogo} alt='Omar El-Mishad Company logo' /></div>
  <div className="container d-flex flex-column align-items-left">
    <h2>Omar El-Mishad Company</h2>
    <p>Where Constraints Fuel Creativity</p>
   
  </div>
   </div>
</section>{/* /Hero Section */}

{/* About Section */}
<section id="about" className="about-section">
  <div className="videocontainer">
    <div className="sub-container1">
        {/* <div className='about-imgs-container'>
          <img src={aboutImg1} className="img-fluid1 " alt='' />
        </div> */}
        <div className="col-lg-6-r ">
        <h3 calssName='Gettoknowus-title' style={{color:'#42607c', position:'relative',left:'20px',marginBottom:'20px'}}>Get To Know Us</h3>
        <ul>
            <li>As a team of creative professionals, we blend innovation
   with the seasoned expertise of industry leaders in their 40s.</li>
            <li>Our mature approach allows us to deliver high-quality 
solutions that drive business growth and offer real value to 
our clients and stakeholder, all within affordable budgets.</li>
            <li>In partnership with IMAGO, we deliver cutting-edge, AI-
powered video production.</li>
          </ul>
          </div>
           </div>
  
      <div className="sub-container2">
          {/* <div>
          <h3>
             Video Title
          </h3>
           <p>
             Video Discreption
          </p>
          </div> */}
          <div className="container2-video">
            <div style={{padding:'56.25% 0 0 0',position:'relative',width:'100%',height:'100%'}}><iframe
  src="https://player.vimeo.com/video/1076189894?h=e1c282d7d6&title=0"
  style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

          </div>
      </div>
  </div>
</section>{/* /About Section */}

{/* vararity photos Section */}
<section id="photos" className="photos section">
  <div className='photos-container'>
      <h3 className='title-photosection'>
        Elevating	Brands	with	Creative	Excellence
      </h3>
      <img src={serviceImg} className="img-ser-all " alt='Creative services showcase by Omar El-Mishad' />
  </div>
</section>

{/* Swiper Section */}
<section id="swiper" className="swiper-section">
 <div className='swiper-container'>
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      Navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{delay:5000}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <img src={working1} className='swiper-img1' alt='Omar El-Mishad team belief - creative freedom'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={working2} className='swiper-img2'alt='Omar El-Mishad company vision - storytelling power'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={working3} className='swiper-img3'alt='Omar El-Mishad company mission - delivering innovation'/>
        </div>
      </SwiperSlide>
    </Swiper>
  </div> 
</section>

{/* Team Section */}
<section id="team" className="team section light-background">
  {/* Section Title */}
  <div className="container section-title" >
    <h2>Team</h2>
    <p>CHECK OUR TEAM</p>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-4 col-md-6" >
        <div className="member">
          <a href='/about'className="pic" ><img src={teammember1} className="img-fluid" alt='Omar El-Mishad - Creative Director' /></a>
          <div className="member-info">
            <h4>Omar El-Mishad</h4>
            <span>Creative Director</span>
            <div className="social">
              
              <a href='https://www.facebook.com/Omarelmishaddirector/?locale=ar_AR' target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"/></a>
              <a href='https://www.linkedin.com/in/omar-el-mishad-%D8%B9%D9%85%D8%B1-%D8%A7%D9%84%D9%85%D8%B4%D8%AF-a0935814b/' target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
              <a href='https://vimeo.com/user17977096' target="_blank" rel="noopener noreferrer"><i className="bi bi-vimeo" /> </a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-4 col-md-6" >
        <div className="member">
          <div className="pic"><img src={teammember2} className="img-fluid" alt='Mohamed ElSalamony - Senior Screenwriter' /></div>
          <div className="member-info">
            <h4>Mohamed ElSalamony</h4>
            <span>Senior Screenwriter</span>
           
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-4 col-md-6" >
        <div className="member">
          <div className="pic"><img src={teammember3} className="img-fluid" alt='Lamiaa Idriss - Account Manager' /></div>
          <div className="member-info">
            <h4>Lamiaa Idriss</h4>
            <span>Account Manager</span>
            
          </div>
        </div>
      </div>{/* End Team Member */}
    </div>
  </div>
</section>{/* /Team Section */}


    </div>
  )
}

export default HomePage
