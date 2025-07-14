import React,{useRef} from 'react';
import biography from '../assets/img/Biography.png';
import FooterPage2 from '../pages/footerpage2.jsx';

const AboutPage = () => {

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
const toggleFS = (el) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (el.requestFullscreen) {
    // real Fullscreen
    enterFullscreen(el);
  } else if (isIOS()) {
    // fallback
    simulateIOSFullscreen(el);
  }
};
  return (
    <div style={{marginTop:'4.5%' , backgroundColor:'white'}}>
     
      <h1 style={{ display: 'none' }}>About Omar ElMishad</h1>
      
      <img
        ref={imgRef}
        src={biography}
        alt="Biography of Omar ElMishad, creative director and founder"
        loading="lazy"
        style={{ width: '100%', objectFit: 'contain', paddingTop: '6.5%', backgroundColor: 'black' , cursor: 'pointer'}}
        // onPointerUp={() => toggleFS(imgRef.current)}
        onClick={() => toggleFS(imgRef.current)}   /* in case pointer events are disabled */
        onTouchEnd={() => toggleFS(imgRef.current)}
      />

      <FooterPage2/>
    </div>
  );
};

export default AboutPage;
