import React, { useEffect } from 'react';

const Hero = ({ id, backgroundImage, children, height = '90vh' }) => {
  useEffect(() => {
    const applyParallax = () => {
      const section = document.getElementById(id);
      if (!section) return;

      section.style.backgroundAttachment = "fixed";

      const handleScroll = () => {
        const rect = section.getBoundingClientRect();
        const offset = rect.top * 0.3;
        section.style.backgroundPositionY = offset + "px";
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };

    const cleanup = applyParallax();
    return cleanup;
  }, [id]);

  const heroStyle = {
    backgroundImage: window.innerWidth <= 400 ? 'none' : `url(${backgroundImage})`
  };
  
  const isHomePage = ['home', 'weddings-hero', 'corporate-hero', 'portraits-hero', 'live-hero'].includes(id);
  const heroClass = isHomePage ? 'hero' : 'hero hero-page';

  return (
    <section id={id} className={heroClass} style={heroStyle}>
      <div className="hero__overlay"></div>
      {children}
    </section>
  );
};

export default Hero;