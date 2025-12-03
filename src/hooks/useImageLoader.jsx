import { useState, useEffect } from 'react';

const useImageLoader = (imageSources) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!imageSources || imageSources.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageSources.length;

    const imagePromises = imageSources.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve();
        };
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => setImagesLoaded(true), 500);
    });
  }, [imageSources]);

  return { imagesLoaded, loadedCount, totalImages: imageSources?.length || 0 };
};

export default useImageLoader;