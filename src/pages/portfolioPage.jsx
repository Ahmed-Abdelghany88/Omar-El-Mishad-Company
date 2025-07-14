import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footerpage2 from '../pages/footerpage2.jsx';

import portfolio1 from '../assets/img/portfolio1.png';
import portfolio2 from '../assets/img/portfolio2.png';
import portfolio3 from '../assets/img/portfolio3.png';
import portfolio4 from '../assets/img/portfolio4.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioPage = () => {
  const swiperContainerRef = useRef(null);
  const swiperRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const updateAutoplay = (swiper, fullscreen) => {
  if (fullscreen) {
    swiper?.autoplay?.stop();
  } else {
    swiper?.autoplay?.start();
  }
};
const enterFullscreen = () => {
  const el = swiperContainerRef.current;
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const swiper = swiperRef.current?.swiper;

  if (!document.fullscreenElement && el) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (iOS) {
      el.classList.add('ios-simulated-fullscreen');
      document.body.style.overflow = 'hidden';
      setIsFullscreen(true);
      updateAutoplay(swiper, true);
    }
  }
};

  
const exitFullscreen = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const swiper = swiperRef.current?.swiper;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (iOS) {
    document.body.style.overflow = '';
    swiperContainerRef.current?.classList.remove('ios-simulated-fullscreen');
    setIsFullscreen(false);
    updateAutoplay(swiper, false);
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
  swiper?.autoplay?.start(); // Start autoplay right away

  const onFullscreenChange = () => {
    const isFS = !!document.fullscreenElement;
    setIsFullscreen(isFS);
    updateAutoplay(swiper, isFS);
  };

  document.addEventListener('fullscreenchange', onFullscreenChange);
  return () => {
    document.removeEventListener('fullscreenchange', onFullscreenChange);
  };
}, []);
  



  const overlayLinks = (
    <div className="overlay-links">
      <div className="link-agent"><a href="https://vimeo.com/726877856" target="_blank" rel="noreferrer">Watch Agent 1100 Rehearsal</a></div>
      <div className="link-tornado"><a href="https://drive.google.com/file/d/1ON4pN3Dgx696Yebx8Ct4sEtOiiCU5Xyo/view" target="_blank" rel="noreferrer">Tornado Product Review</a></div>
      <div className="link-showreel"><a href="https://drive.google.com/file/d/1mdpHPw_giabqReUZDtx2fMLOMyJnap6A/view" target="_blank" rel="noreferrer">Product Review Showreel</a></div>
      <div className="link-cartoon"><a href="https://drive.google.com/file/d/1tmo5V2R66wW44eskO-nVoBNztZWD5CeB/view" target="_blank" rel="noreferrer">Watch Cartoon Dubbing</a></div>
      <div className="link-valyou"><a href="https://drive.google.com/file/d/12HD2OB3uvtMtEISlOZQcRW3m28MSvrQf/view" target="_blank" rel="noreferrer">Watch ValYou Showreel</a></div>
      <div className="link-more"><a href="https://drive.google.com/drive/folders/1PAYyykL6_ADKZ2G1hhMLuurTBhioP-bN" target="_blank" rel="noreferrer">Discover More Videos</a></div>
    </div>
  );

  return (
    <div className='portfolio-sction' style={{ width: '100%', backgroundColor: 'white', paddingTop: '5%' }}>
      <div className="portfolio-swiper-container" ref={swiperContainerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <img
              src={portfolio1}
              alt="Portfolio 1"
              className="portfolio-slide"
              onPointerUp={handleSwiperPointerUp}
              style={{ cursor: 'pointer', width: '100%', objectFit: 'contain' }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={portfolio2}
              alt="Portfolio 2"
              className="portfolio-slide"
              onPointerUp={handleSwiperPointerUp}
              style={{ cursor: 'pointer', width: '100%', objectFit: 'contain' }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={portfolio3}
              alt="Portfolio 3"
              className="portfolio-slide"
              onPointerUp={handleSwiperPointerUp}
              style={{ cursor: 'pointer', width: '100%', objectFit: 'contain' }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative-wrapper" style={{ position: 'relative' }}>
              <img
                src={portfolio4}
                alt="Portfolio 4"
                className="portfolio-slide"
                onPointerUp={handleSwiperPointerUp}
                style={{ cursor: 'pointer', width: '100%', objectFit: 'contain' }}
              />
              {overlayLinks}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footerpage2 />
    </div>
  );
};

export default PortfolioPage;
