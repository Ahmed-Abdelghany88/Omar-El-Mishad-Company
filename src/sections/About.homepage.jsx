import React from 'react'
import '../sections/About.css';
const About = () => {
  return (
    <div>
      {/* About Section */}
<section id="about" className="about-section">
  <div className="videocontainer">
    <div className="sub-container1">
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
  src="https://www.youtube.com/embed/Hy0QL1F5L5w?si=0qg8j-AS2wmh94-T"
  title="YouTube video player" frameborder="0"
  style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}

  allow="autoplay;accelerometer; fullscreen; picture-in-picture"
  allowFullScreen 
></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

          </div>
      </div>
  </div>
</section>{/* /About Section */}
    </div>
  )
}

export default About
