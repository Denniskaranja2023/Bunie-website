import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose}>
        ✕
      </button>
      <div className="lightbox__nav">
        <div className="lightbox__btn" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
          ‹
        </div>
        <div className="lightbox__btn" onClick={(e) => { e.stopPropagation(); onNext(); }}>
          ›
        </div>
      </div>
      <img 
        className="lightbox__img" 
        src={currentImage.src} 
        alt={currentImage.alt}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="lightbox__caption">
        {currentImage.caption || currentImage.alt}
      </div>
    </div>
  );
};

export default Lightbox;