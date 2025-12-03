import React, { useState } from 'react';
import Lightbox from './Lightbox.jsx';

const Gallery = ({ title, images, galleryId }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id={galleryId} className="section">
        <div className="headings">
          <h1>{title}</h1>
        </div>
        <div className="grid">
          {images.map((image, index) => (
            <figure key={index} className="card">
              <img 
                src={image.src} 
                alt={image.alt} 
                onClick={() => openLightbox(index)}
              />
            </figure>
          ))}
        </div>
      </section>
      
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default Gallery;