import React from 'react';
import footericon from '../assets/img/footericon.png';

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container-foot footer-top">
        <div className="row-footer gy-4">

          {/* Footer Contact */}
          <div className="footer-about col-lg-4 col-md-6 col-sm-8">
            <div className="footer-contact">
              <div>
                <img src={footericon} className="footer-img" alt="Omar ElMishad Company footer logo" />
              </div>
              <p>Sole proprietorship</p>
              <p><i className="bi bi-whatsapp" />: +44 7477 140271</p>
              <p>331-008-793: رقم التسجيل الضريبى</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li><i className="bi bi-chevron-right" /> <a href="/">Home</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="/about">About Us</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="/portfolio">Portfolio</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Terms of Service</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-md-3 footer-links">
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
          <div className="col-lg-2 col-md-3 footer-links">
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

export default Footer;
