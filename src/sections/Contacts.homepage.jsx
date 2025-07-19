import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import footericon from '../assets/img/footericon.png';
import '../sections/Contacts.css';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleHomeClick = () => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      setIsOpen(false);
    };
  
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="row-footer gy-4">

          {/* Footer Contact */}
          
            <div className="footer-contact">
              <div>
                <img src={footericon} className="footer-img" alt="Omar ElMishad Company footer logo" />
              </div>
              <p>Sole proprietorship</p>
              <p><i className="bi bi-whatsapp" />: +44 7477 140271</p>
              <p>331-008-793: رقم التسجيل الضريبى</p>
            </div>
          

          {/* Useful Links */}
          <div className="useful-links col-lg-2 col-md-3 ">
            <h3>Useful Links</h3>
            <ul>
              <li><i className="bi bi-chevron-right" /> <Link to="/" onClick={handleHomeClick} style={{ cursor: "pointer" }}>Home</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="/about">About Us</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="/portfolio">Portfolio</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="/terms">Terms of Service</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="our-services col-lg-2 col-md-3 ">
            <h3>Our Services</h3>
            <ul>
              <li><i className="bi bi-chevron-right" /> Film Production</li>
              <li><i className="bi bi-chevron-right" /> AI & Post-Production</li>
              <li><i className="bi bi-chevron-right" /> Audio Production</li>
              <li><i className="bi bi-chevron-right" /> Brand Consulting</li>
              <li><i className="bi bi-chevron-right" /> Product Placement</li>
              <li><i className="bi bi-chevron-right" /> Training</li>
            </ul>
          </div>

          {/* Team Emails */}
          <div className="team-mails col-lg-2 col-md-3 ">
            <h3>Team</h3>
            <ul className="job-emails">
              <li><i className="bi bi-chevron-right" /><a href="mailto:omar-elmishad@omardir.com">Creative Director: <span>omar-elmishad@omardir.com</span></a></li>
              <li><i className="bi bi-chevron-right" /><a href="mailto:lamia-idriss@omardir.com">Account Manager: lamia-idriss@omardir.com</a></li>
              <li><i className="bi bi-chevron-right" /><a href="mailto:mohammed-elsalamony@omardir.com">Senior Screenwriter: mohammed-elsalamony@omardir.com</a></li>
              <li><i className="bi bi-chevron-right" /><a href="mailto:mohammed-alabbasy@omardir.com">Accountant: mohammed-alabbasy@omardir.com</a></li>
              <li><i className="bi bi-chevron-right" /> AI Filmmaker: Abdülhamit Habiboğlu</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contacts;
