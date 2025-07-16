import React,{ useRef , useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../sections/Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination ,Autoplay } from 'swiper/modules';

import working1 from '../assets/img/working-1.png';
import working2 from '../assets/img/working-2.png';
import working3 from '../assets/img/working-3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperSection = () => {

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');

    if (scrollTo) {
      const targetEl = document.getElementById(scrollTo);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Delay to ensure rendering is done
      }
    }
  }, [location.search]);


const swiperContainerRef = useRef(null);
  const swiperRef = useRef(null);
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
    </div>
  )
}

export default SwiperSection
