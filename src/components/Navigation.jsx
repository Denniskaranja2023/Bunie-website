import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ embedded = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
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