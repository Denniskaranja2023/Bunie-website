import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import WeddingsSection from '../components/sections/WeddingsSection.jsx';
import CorporateSection from '../components/sections/CorporateSection.jsx';
import PortraitsSection from '../components/sections/PortraitsSection.jsx';
import LiveSection from '../components/sections/LiveSection.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WeddingsSection />
      <CorporateSection />
      <PortraitsSection />
      <LiveSection />
      <ScrollIndicator />
      <Footer />
    </div>
  );
};

export default Home;