import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Footer from '../components/Footer.jsx';
import { heroImages } from '../data/galleryData.jsx';

const About = () => {
  return (
    <div>
      <Navigation />
      
      <section className="about">
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
            <Link to="/contact" className="contact-btn">Contact us</Link>
          </div>
          <div className="about__image">
            <img src={heroImages.about} alt="About Bunie Creatives" />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__container">
          <h2>Our Services</h2>
          <div className="services__grid">
            <div className="service__item">
              <img src={heroImages.weddings} alt="Wedding Photography" className="service__image" />
              <h3>Wedding Photography</h3>
              <p>Capturing your special day with elegance and emotion</p>
              <Link to="/weddings" className="service__btn">View Gallery</Link>
            </div>
            <div className="service__item">
              <img src={heroImages.corporate} alt="Corporate Events" className="service__image" />
              <h3>Corporate Events Photography</h3>
              <p>Have your corporate events professionally covered</p>
              <Link to="/corporate" className="service__btn">View Gallery</Link>
            </div>
            <div className="service__item">
              <img src={heroImages.portraits} alt="Professional Headshots" className="service__image" />
              <h3>Professional Headshots</h3>
              <p>Professional portraits that showcase your personality</p>
              <Link to="/portraits" className="service__btn">View Gallery</Link>
            </div>
            <div className="service__item">
              <img src={heroImages.live} alt="Music Production" className="service__image" />
              <h3>Music Production</h3>
              <p>Capture your live recordings with our state of the art videography and photography services</p>
              <Link to="/music-production" className="service__btn">View Gallery</Link>
            </div>
            <div className="service__item additional-service">
              <div className="service__image additional-service-content">
                <h3>And Many More...</h3>
                <p>Personal shoots, graduations, birthdays, baby showers, anniversaries, family portraits - whatever event you can think of, we've got you covered.</p>
              </div>
              <Link to="/contact" className="service__btn">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;