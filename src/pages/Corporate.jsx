import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages, corporateImages } from '../data/galleryData.jsx';

const Corporate = () => {
  return (
    <div>
      <Navigation />
      <Hero id="corporate-hero" backgroundImage={heroImages.corporate}>
        <div className="hero-content">
          <h1 className="hero-title">Corporate Events</h1>
          <p className="hero-description">Professional event photography that captures the essence of your corporate gatherings. From conferences to team building events, we document your business milestones with precision.</p>
          <Link to="/contact" className="hero-contact-btn">Contact Us</Link>
        </div>
      </Hero>
      <Gallery title="Corporate events" images={corporateImages} galleryId="corporate" />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Corporate;