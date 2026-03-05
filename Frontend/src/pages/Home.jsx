import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import Hero from '../components/Hero.jsx';
import HeroButton from '../components/HeroButton.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages } from '../data/galleryData.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <Hero id="weddings-hero" backgroundImage={heroImages.weddings} height="100vh">
        <HeroButton to="/weddings">View Weddings</HeroButton>
      </Hero>
      
      <Hero id="corporate-hero" backgroundImage={heroImages.corporate}>
        <HeroButton to="/corporate">View Corporate Events</HeroButton>
      </Hero>
      
      <Hero id="portraits-hero" backgroundImage={heroImages.portraits} height="100vh">
        <HeroButton to="/portraits">View Professional Headshots</HeroButton>
      </Hero>
      
      <Hero id="live-hero" backgroundImage={heroImages.live} height="100vh">
        <HeroButton to="/music-production">View Music Production</HeroButton>
      </Hero>
      
      <div style={{ textAlign: 'center', padding: '80px 20px', background: '#f8f9fa' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#111827', fontWeight: '300' }}>Explore More</h2>
        <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>Discover our complete collection of photography work across all categories</p>
        <a 
          href="https://bunie-creative-studio.client-gallery.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            background: '#F15A24',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(241, 90, 36, 0.3)'
          }}
        >
          View other categories
        </a>
      </div>
      
      <ScrollIndicator />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;