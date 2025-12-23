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
      
      <ScrollIndicator />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;