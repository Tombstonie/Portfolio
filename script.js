<<<<<<< HEAD
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
}

=======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
}

>>>>>>> 91d58e44b9e081d5b5e2471efb92d1ed0d0d26bf
document.addEventListener('DOMContentLoaded', setActiveNav);