import React from 'react';
import { heroImages } from '../../data/galleryData.jsx';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2>About</h2>
          <p>
            We are passionate photographers dedicated to capturing life's most precious moments. 
            With experience in weddings, portraits, corporate event photography and live recordings, we believe 
            in creating timeless imagery that tells your unique story.
          </p>
          <p>
            Every frame tells a story, every moment becomes a memory, and every photograph 
            serves as a bridge between the present and the future. Our approach combines 
            technical expertise with artistic vision to deliver images that you'll treasure forever.
          </p>
        </div>
        <div className="about__image">
          <img src={heroImages.about} alt="About Bunie Creatives" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;