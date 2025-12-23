import React from 'react';
import { Link } from 'react-router-dom';

const HeroButton = ({ to, children, color = '#F15A24' }) => {
  return (
    <Link 
      to={to} 
      className="hero-btn"
      style={{ borderColor: color, color: color }}
    >
      {children}
    </Link>
  );
};

export default HeroButton;