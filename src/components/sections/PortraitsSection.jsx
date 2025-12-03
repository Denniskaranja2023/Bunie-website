import React from 'react';
import Hero from '../Hero.jsx';
import Gallery from '../Gallery.jsx';
import { heroImages, portraitImages } from '../../data/galleryData.jsx';

const PortraitsSection = () => {
  return (
    <>
      <Hero id="portraits-hero" backgroundImage={heroImages.portraits} height="100vh" />
      <Gallery title="Corporate headshots" images={portraitImages} galleryId="portraits" />
    </>
  );
};

export default PortraitsSection;