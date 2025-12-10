import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ embedded = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header className={`nav ${embedded ? 'nav-embedded' : ''}`}>
      <div className="container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="/photos/bunie.jpg" alt="Bunie Creatives" />
          <span><span className="accent">Bunie</span> Creatives</span>
        </Link>
        <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <div className="dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <span className="dropdown-toggle">Services</span>
            <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
              <Link to="/weddings" onClick={closeMenu}>Weddings</Link>
              <Link to="/corporate" onClick={closeMenu}>Corporate events</Link>
              <Link to="/portraits" onClick={closeMenu}>Professional headshots</Link>
              <Link to="/music-production" onClick={closeMenu}>Music production</Link>
            </div>
          </div>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <button 
          className="hamburger" 
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;