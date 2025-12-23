import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="camera-loader">
        <div className="camera-body">
          <div className="camera-lens">
            <div className="lens-inner"></div>
          </div>
          <div className="camera-flash"></div>
        </div>
        <div className="loading-text">Great memories are worth keeping</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;