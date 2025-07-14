import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import omarlogo from "../assets/img/omarlogo.png";

const Navbar = () => {
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
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={omarlogo} alt="Omar ElMishad Logo" />
        </Link>

        {/* Hamburger Icon (mobile only) - moved to the right */}
        <button
          className="mobile-nav-toggle d-lg-none ms-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <i className={isOpen ? "bi bi-x" : "bi bi-list"}></i>
        </button>

        {/* Navigation Menu */}
        <nav
          id="navmenu"
          className={`navmenu ${isOpen ? "navmenu-visible" : ""}`}
        >
          <ul>
            <li>
              <a onClick={handleHomeClick} style={{ cursor: "pointer" }}>Home</a>
            </li>
            <li><a href="/#about" onClick={() => setIsOpen(false)}>Know Us</a></li>
            <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><a href="/#team" onClick={() => setIsOpen(false)}>Team</a></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><a href="#footer" onClick={() => setIsOpen(false)}>Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
