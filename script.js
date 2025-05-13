// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // particles.js configuration
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#999999" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#cccccc",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });

  // Load projects from JSON
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById('project-grid');
      projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${project.image}" alt="${project.shortName}"/>
              <h3>${project.shortName}</h3>
            </div>
            <div class="flip-card-back">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank">View Project</a>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error('Failed to load projects:', err));
});
