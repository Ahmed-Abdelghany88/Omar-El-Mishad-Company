import React from 'react'
import teammember3 from "../assets/img/team-3.jpg";
import teammember2 from "../assets/img/team-2.jpg";
import teammember1 from "../assets/img/team-1.jpg";

import '../sections/Team.css';


const Team = () => {
  return (
    <div>
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
    </div>
  )
}

export default Team
