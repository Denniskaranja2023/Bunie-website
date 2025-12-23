import React from 'react';
import Hero from '../Hero.jsx';
import Gallery from '../Gallery.jsx';
import { heroImages, corporateImages } from '../../data/galleryData.jsx';

const CorporateSection = () => {
  return (
    <>
      <Hero id="corporate-hero" backgroundImage={heroImages.corporate} />
      <Gallery title="Corporate events" images={corporateImages} galleryId="corporate" />
    </>
  );
};

export default CorporateSection;