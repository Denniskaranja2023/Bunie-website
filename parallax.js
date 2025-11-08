window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero__content');
  const heroSection = document.querySelector('#home');
  
  if (heroContent && heroSection) {
    const heroHeight = heroSection.offsetHeight;
    const scrollProgress = scrolled / heroHeight;
    
    if (scrolled < heroHeight) {
      const translateY = scrolled * 0.5;
      heroContent.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
    }
  }
});