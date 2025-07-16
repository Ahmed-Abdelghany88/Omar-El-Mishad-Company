import React,{ useRef  } from 'react'
import '../sections/Photos.css';
import serviceImg from "../assets/img/service-all.png";

const Photos = () => {
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
    <div>
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
    </div>
  )
}

export default Photos
