import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'weddings-hero', label: 'Weddings' },
    { id: 'corporate-hero', label: 'Corporate' },
    { id: 'portraits-hero', label: 'Portraits' },
    { id: 'live-hero', label: 'Live' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;