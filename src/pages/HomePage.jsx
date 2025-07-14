import React,{ useRef , useEffect, useState } from 'react'
import FooterPage from './footerPage.jsx';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';





const HomePage = () => {

  const toggleImageFullscreen = () => {
  const el = imgRef.current;
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (!el) return;

  if (document.fullscreenElement) {
    document.exitFullscreen();
    document.body.style.overflow = '';
  } else if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (iOS) {
    el.classList.toggle('ios-simulated-fullscreen');
    const isFS = el.classList.contains('ios-simulated-fullscreen');
    document.body.style.overflow = isFS ? 'hidden' : '';
  }
};

const swiperContainerRef = useRef(null);
  const swiperRef = useRef(null);
const imgRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  const enterFullscreen = () => {
    const el = swiperContainerRef.current;
    const swiper = swiperRef.current?.swiper;

    if (!document.fullscreenElement && el) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      } else if (isIOS()) {
        el.classList.add('ios-simulated-fullscreen');
        document.body.style.overflow = 'hidden';
        setIsFullscreen(true);
        swiper?.autoplay?.stop();
      }
    }
  };

  const exitFullscreen = () => {
    const swiper = swiperRef.current?.swiper;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (isIOS()) {
      document.body.style.overflow = '';
      swiperContainerRef.current?.classList.remove('ios-simulated-fullscreen');
      setIsFullscreen(false);
      swiper?.autoplay?.start();
    }
  };

  const handleSwiperPointerUp = () => {
    if (!document.fullscreenElement && !isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    swiper?.autoplay?.start();

    const onFullscreenChange = () => {
      const isFS = !!document.fullscreenElement;
      setIsFullscreen(isFS);
      if (isFS) {
        swiper?.autoplay?.stop();
      } else {
        swiper?.autoplay?.start();
      }
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

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
          <div className="container2-video">
            <div style={{padding:'56.25% 0 0 0',position:'relative',width:'100%',height:'100%'}}><iframe
  src="https://player.vimeo.com/video/1076189894?h=e1c282d7d6&title=0"
  style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen title='about section video'
></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

          </div>
      </div>
  </div>
</section>{/* /About Section */}

{/* photos Section */}
  <section id="photos" className="photos section">
        <div className='photos-container'>
          <h3 className='title-photosection'>
            Elevating Brands with Creative Excellence
          </h3>
<img
  ref={imgRef}
  src={serviceImg}
  className="img-ser-all"
  alt="Creative services showcase"
  style={{ cursor: 'pointer' }}
  title="Tap to toggle fullscreen"
   // onPointerUp={() => toggleFS(imgRef.current)}
   onPointerUp={toggleImageFullscreen}  
  // onTouchEnd={() => toggleFS(imgRef.current)}
/>
        </div>
      </section>

{/* Swiper Section */}
 <section id="swiper" className="swiper-section">
      <div className="fullscreen-swiper-container" ref={swiperContainerRef}>

  <Swiper
  ref={swiperRef}
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    loop={true}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
  >
          <SwiperSlide><img src={working1} 
          alt="Slide 1"
          className="swiper-img1" 
          style={{ cursor: 'pointer' }}
 onPointerUp={handleSwiperPointerUp}

/></SwiperSlide>
          <SwiperSlide>
            <img src={working2} 
          alt="Slide 2" 
          className="swiper-img2" 
          style={{ cursor: 'pointer' }}
 onPointerUp={handleSwiperPointerUp}
/>
</SwiperSlide>
          <SwiperSlide><img src={working3} 
          alt="Slide 3" 
          className="swiper-img3" 
          style={{ cursor: 'pointer' }}
onPointerUp={handleSwiperPointerUp}
 /></SwiperSlide>
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
            <h4>Lamia Idriss</h4>
            <span>Account Manager</span>
            
          </div>
        </div>
      </div>{/* End Team Member */}
    </div>
  </div>
</section>{/* /Team Section */}

<FooterPage />
    </div>

  )
}

export default HomePage;
