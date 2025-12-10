import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages, weddingImages } from '../data/galleryData.jsx';

const Weddings = () => {
  return (
    <div>
      <Navigation />
      <Hero id="weddings-hero" backgroundImage={heroImages.weddings} height="100vh">
        <div className="hero-content">
          <h1 className="hero-title">Wedding Photography</h1>
          <p className="hero-description">Capturing your most precious moments with elegance and artistry. From intimate ceremonies to grand celebrations, we preserve the magic of your special day forever.</p>
          <Link to="/contact" className="hero-contact-btn">Contact Us</Link>
        </div>
      </Hero>
      <Gallery title="Weddings" images={weddingImages} galleryId="weddings" />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Weddings;