import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages, liveImages } from '../data/galleryData.jsx';

const MusicProduction = () => {
  return (
    <div>
      <Navigation />
      <Hero backgroundImage={heroImages.live} height="70vh">
        <div className="hero-content">
          <h1 className="hero-title">Music Production</h1>
          <p className="hero-description">Dynamic photography and videography for live recordings and music events. We capture the energy, passion, and artistry of musical performances with creative flair.</p>
          <Link to="/contact" className="hero-contact-btn">Contact Us</Link>
        </div>
      </Hero>
      <Gallery title="Music production" images={liveImages} galleryId="live" />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default MusicProduction;