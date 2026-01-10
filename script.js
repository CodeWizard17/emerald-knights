document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link based on current path
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
  const eventsToggle = document.querySelector('.nav-dropdown > a');
  if (eventsToggle && (current === 'future-events.html' || current === 'past-events.html')) {
    eventsToggle.classList.add('active');
  }

  // Toggle navigation on small screens
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
