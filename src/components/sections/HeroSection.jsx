import React from 'react';
import Navigation from '../Navigation.jsx';
import Hero from '../Hero.jsx';
import { heroImages } from '../../data/galleryData.jsx';

const HeroSection = () => {
  return (
    <Hero id="home" backgroundImage={heroImages.main}>
      <Navigation embedded={true} />
    </Hero>
  );
};

export default HeroSection;