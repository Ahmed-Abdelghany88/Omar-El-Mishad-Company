import React,{useRef} from 'react';
import biography from '../assets/img/Biography.png';
import FooterPage2 from '../components/footerpage2.jsx';
import '../pages/biography.css';
const BiographyPage = () => {

  const enterFullscreen = async (el) => {
  try {
    // Must be inside click / pointer / touch handler!
    await el.requestFullscreen();          // Chrome / Edge / Firefox
  } catch (err) {
    // Safari & fallback
    if (err?.name === 'TypeError') {
      // iOS <16 or a blocked call
      simulateIOSFullscreen(el);
    } else {
      console.warn('Fullscreen failed:', err);
    }
  }
};

 const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const simulateIOSFullscreen = (el) => {
  el.classList.toggle('ios-fullscreen');
  document.body.classList.toggle('no-scroll');
};

const imgRef = useRef(null);
const toggleImageFullscreen = () => {
  const el = imgRef.current;
  if (!el) return;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (document.fullscreenElement || el.classList.contains('ios-fullscreen')) {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }

    document.body.style.overflow = '';
    el.classList.remove('img-fullscreen', 'ios-fullscreen');

  } else {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (isIOS) {
      el.classList.add('ios-fullscreen');
    }

    el.classList.add('img-fullscreen');
    document.body.style.overflow = 'hidden';
  }
};
  return (
    <div className='about-page'>
     
      <h1 style={{ display: 'none' }}>About Omar ElMishad</h1>
      
      <img
        ref={imgRef}
        src={biography}
        alt="Biography of Omar ElMishad, creative director and founder"
        loading="lazy"
        style={{ width: '100%', objectFit: 'contain', paddingTop: '6.5%', backgroundColor: 'black' , cursor: 'pointer'}}
        onPointerUp={toggleImageFullscreen}
       
      />

      <FooterPage2/>
    </div>
  );
};

export default BiographyPage;
