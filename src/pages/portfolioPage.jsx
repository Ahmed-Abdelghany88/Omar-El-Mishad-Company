import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../assets/css/main.css';
import portfolio1 from '../assets/img/portfolio1.png';
import portfolio2 from '../assets/img/portfolio2.png';
import portfolio3 from '../assets/img/portfolio3.png';
import portfolio4 from '../assets/img/portfolio4.png';
import FooterPage2 from '../pages/footerpage2.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const PortfolioPage = () => {

//    const enterFullscreen = async (el) => {
//   try {
//     // Must be inside click / pointer / touch handler!
//     await el.requestFullscreen();          // Chrome / Edge / Firefox
//   } catch (err) {
//     // Safari & fallback
//     if (err?.name === 'TypeError') {
//       // iOS <16 or a blocked call
//       simulateIOSFullscreen(el);
//     } else {
//       console.warn('Fullscreen failed:', err);
//     }
//   }
// };

 const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// const simulateIOSFullscreen = (el) => {
//   el.classList.toggle('ios-fullscreen');
//   document.body.classList.toggle('no-scroll');
// };
  

const swiperRef = useRef(null);
const toggleFS = (el) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    document.body.style.overflow = '';
  } else if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (isIOS()) {
    // iOS fallback
    el.classList.toggle('ios-fullscreen');
    const locked = el.classList.contains('ios-fullscreen');
    document.body.style.overflow = locked ? 'hidden' : '';
  }
};

  const overlayLinks = (
  <div className="overlay-links">
    <div className="link-agent"><a  href="https://vimeo.com/726877856" target="_blank" rel="noreferrer">Watch Agent 1100 Rehearsal</a></div>
    <div className="link-tornado"><a  href="https://drive.google.com/file/d/1ON4pN3Dgx696Yebx8Ct4sEtOiiCU5Xyo/view" target="_blank" rel="noreferrer">Tornado Product Review</a></div>
    <div className="link-showreel"><a  href="https://drive.google.com/file/d/1mdpHPw_giabqReUZDtx2fMLOMyJnap6A/view" target="_blank" rel="noreferrer">Product Review Showreel</a></div>
    <div className="link-cartoon"><a  href="https://drive.google.com/file/d/1tmo5V2R66wW44eskO-nVoBNztZWD5CeB/view" target="_blank" rel="noreferrer">Watch Cartoon Dubbing</a></div>
    <div className="link-valyou"><a  href="https://drive.google.com/file/d/12HD2OB3uvtMtEISlOZQcRW3m28MSvrQf/view" target="_blank" rel="noreferrer">Watch ValYou Showreel</a></div>
    <div className="link-more"><a  href="https://drive.google.com/drive/folders/1PAYyykL6_ADKZ2G1hhMLuurTBhioP-bN" target="_blank" rel="noreferrer">Discover More Videos</a></div>
  </div>
);


  return (
    <div className='portfolio-sction'style={{ width: '100%', backgroundColor: 'white' , marginTop:'4.5%'}}>
   

      <div className="portfolio-swiper-container" ref={swiperRef}>
        
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={50}
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
              onPointerUp={() => toggleFS(swiperRef.current)}
  // onClick={() => toggleFS(swiperRef.current)}  
  // onTouchEnd={() => toggleFS(swiperRef.current)}
              style={{ cursor: 'pointer' , width:'100%', objectFit:'contain'}}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={portfolio2}
              alt="Portfolio 2"
              className="portfolio-slide"
              onPointerUp={() => toggleFS(swiperRef.current)}
  // onClick={() => toggleFS(swiperRef.current)}   /* in case pointer events are disabled */
  // onTouchEnd={() => toggleFS(swiperRef.current)}
              style={{ cursor: 'pointer' , width:'100%', objectFit:'contain'}}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={portfolio3}
              alt="Portfolio 3"
              className="portfolio-slide"
              onPointerUp={() => toggleFS(swiperRef.current)}
  // onClick={() => toggleFS(swiperRef.current)}   /* in case pointer events are disabled */
  // onTouchEnd={() => toggleFS(swiperRef.current)}
              style={{ cursor: 'pointer' , width:'100%', objectFit:'contain' }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative-wrapper" style={{ position: 'relative' }}>
              <img
                src={portfolio4}
                alt="Portfolio 4"
                className="portfolio-slide"
                onPointerUp={() => toggleFS(swiperRef.current)}
  // onClick={() => toggleFS(swiperRef.current)}  
  // onTouchEnd={() => toggleFS(swiperRef.current)}
                style={{ cursor: 'pointer' , width:'100%', objectFit:'contain'}}
              />
              {overlayLinks}
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <FooterPage2/>
    </div>
  );
};

export default PortfolioPage;
