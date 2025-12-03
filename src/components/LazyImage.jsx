import React, { useState } from 'react';

const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="lazy-image-container">
      {!isLoaded && !hasError && (
        <div className="image-spinner">
          <div className="mini-camera">
            <div className="mini-lens"></div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        style={{ display: hasError ? 'none' : 'block' }}
      />
      {hasError && (
        <div className="image-error">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;