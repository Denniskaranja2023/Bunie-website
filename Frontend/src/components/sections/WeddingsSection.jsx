import React from 'react';
import Hero from '../Hero.jsx';
import Gallery from '../Gallery.jsx';
import { heroImages, weddingImages } from '../../data/galleryData.jsx';

const WeddingsSection = () => {
  return (
    <>
      <Hero id="weddings-hero" backgroundImage={heroImages.weddings} height="100vh" />
      <Gallery title="Weddings" images={weddingImages} galleryId="weddings" />
    </>
  );
};

export default WeddingsSection;