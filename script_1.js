// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // particles.js configuration
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#999999" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#cccccc",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    },
    "retina_detect": true
  });

  // Slider functionality
  const container = document.querySelector('.slides-container');
  const slide = document.querySelector('.slide');

  if (container && slide) {
    const slideMargin = parseFloat(getComputedStyle(slide).marginLeft) + parseFloat(getComputedStyle(slide).marginRight);
    const slideWidth = slide.offsetWidth + slideMargin;

    document.querySelector('.next').addEventListener('click', () => {
      container.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    document.querySelector('.prev').addEventListener('click', () => {
      container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
  }

  // Optional: Smooth scroll for internal anchor links (like #projects-preview)
  const projectLink = document.querySelector('a[href="#projects-preview"]');
  if (projectLink) {
    projectLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#projects-preview');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
