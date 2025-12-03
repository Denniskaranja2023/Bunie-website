import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import WeddingsSection from '../components/sections/WeddingsSection.jsx';
import CorporateSection from '../components/sections/CorporateSection.jsx';
import PortraitsSection from '../components/sections/PortraitsSection.jsx';
import LiveSection from '../components/sections/LiveSection.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Footer from '../components/Footer.jsx';
import useImageLoader from '../hooks/useImageLoader.jsx';
import { heroImages, weddingImages, corporateImages, portraitImages, liveImages } from '../data/galleryData.jsx';

const Home = () => {
  const allImages = [
    ...Object.values(heroImages),
    ...weddingImages.map(img => img.src),
    ...corporateImages.map(img => img.src),
    ...portraitImages.map(img => img.src),
    ...liveImages.map(img => img.src)
  ];

  const { imagesLoaded } = useImageLoader(allImages);

  if (!imagesLoaded) {
    return <LoadingSpinner />;
  }

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