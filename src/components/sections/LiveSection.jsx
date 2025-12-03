import React from 'react';
import Hero from '../Hero.jsx';
import Gallery from '../Gallery.jsx';
import { heroImages, liveImages } from '../../data/galleryData.jsx';

const LiveSection = () => {
  return (
    <>
      <Hero id="live-hero" backgroundImage={heroImages.live} height="100vh" />
      <Gallery title="Music production" images={liveImages} galleryId="live" />
    </>
  );
};

export default LiveSection;