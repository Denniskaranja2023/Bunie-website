import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <h2>Services</h2>
        <div className="services__grid">
          <div className="service__item">
            <h3>Wedding Photography</h3>
            <p>Capturing your special day with elegance and emotion</p>
          </div>
          <div className="service__item">
            <h3>Corporate events photography</h3>
            <p>Have your corporate events professionally covered</p>
          </div>
          <div className="service__item">
            <h3>Corporate headshots</h3>
            <p>Professional portraits that showcase your personality</p>
          </div>
          <div className="service__item">
            <h3>Live Recordings</h3>
            <p>Capture your live recordings with our state of the art videography and photography services</p>
          </div>
          <div className="service__item">
            <h3>Many more</h3>
            <p>Personal shoots, graduations, birthdays, baby showers. Any event you can think of, we got you covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;