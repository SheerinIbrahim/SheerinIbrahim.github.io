// Toggle navbar for mobile view
document.getElementById("menu").onclick = function() {
  document.querySelector("header .navbar").classList.toggle("nav-toggle");
}

// Optional: Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Preloader Fadeout
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".loader-container").classList.add("fade-out");
  }, 1500);
}
