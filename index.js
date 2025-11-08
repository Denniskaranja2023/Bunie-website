// Custom smooth scroll function for faster transitions
function smoothScrollTo(element, duration = 300) {
  const targetPosition = element.offsetTop - 120; // Adjust for fixed nav height
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Smooth scroll
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) smoothScrollTo(element, 300); // Faster duration
    }
  });
});

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let currentGallery = [];
let idx = 0;

// Galleries grouped by section
const galleries = {
  weddings: Array.from(document.querySelectorAll('#weddings img')),
  travel: Array.from(document.querySelectorAll('#portraits img')),
  corporates: Array.from(document.querySelectorAll('#corporate img')),
  live: Array.from(document.querySelectorAll('#live img'))
};

function openLB(images, i) {
  currentGallery = images;
  idx = i;
  const el = currentGallery[idx];
  lbImg.src = el.src;
  lbImg.alt = el.alt || '';
  lbCaption.textContent = el.dataset.caption || el.alt || '';
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
}

function closeLB() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  lbImg.src = '';
}

// Attach events
Object.entries(galleries).forEach(([section, images]) => {
  images.forEach((img, i) => {
    img.addEventListener('click', () => openLB(images, i));
  });
});

lbClose.addEventListener('click', closeLB);
lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
lbPrev.addEventListener('click', () => {
  idx = (idx - 1 + currentGallery.length) % currentGallery.length;
  openLB(currentGallery, idx);
});
lbNext.addEventListener('click', () => {
  idx = (idx + 1) % currentGallery.length;
  openLB(currentGallery, idx);
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (lb.classList.contains('open')) {
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') lbPrev.click();
    if (e.key === 'ArrowRight') lbNext.click();
  }
});

// Combined CSS + JS Parallax
function applyParallax(id) {
  const section = document.getElementById(id);
  if (!section) return;

  // Keep CSS-based fixed background
  section.style.backgroundAttachment = "fixed";

  // Add JS-based offset for extra motion
  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top * 0.3; // tweak multiplier for stronger effect
    section.style.backgroundPositionY = offset + "px";
  });
}

// Match actual hero IDs in your HTML
["home", "weddings-hero", "corporate-hero", "portraits-hero", "live-hero"].forEach(applyParallax);