import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.jsx';
import Hero from '../Hero.jsx';
import { heroImages } from '../../data/galleryData.jsx';

const HeroSection = () => {
  return (
    <Hero id="home" backgroundImage={heroImages.main}>
      <Navigation embedded={true} />
      <div className="hero-content">
        <h1 className="hero-title">Bunie Creatives</h1>
        <p className="hero-description">Great memories are worth keeping</p>
        <Link to="/about" className="hero-contact-btn">About our services</Link>
      </div>
    </Hero>
  );
};

export default HeroSection;