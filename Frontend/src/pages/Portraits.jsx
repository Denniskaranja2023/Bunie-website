import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages, portraitImages } from '../data/galleryData.jsx';

const Portraits = () => {
  return (
    <div>
      <Navigation />
      <Hero backgroundImage={heroImages.portraits} height="70vh">
        <div className="hero-content">
          <h1 className="hero-title">Professional Headshots</h1>
          <p className="hero-description">Striking professional portraits that showcase your personality and professionalism. Perfect for LinkedIn profiles, corporate websites, and personal branding.</p>
          <Link to="/contact" className="hero-contact-btn">Contact Us</Link>
        </div>
      </Hero>
      <Gallery title="Professional headshots" images={portraitImages} galleryId="portraits" />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Portraits;