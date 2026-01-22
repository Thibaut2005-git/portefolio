// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
}

// Copy email functionality
const copyEmailBtn = document.getElementById('copy-email');
copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('godwinsohe07@gmail.com').then(() => {
    alert('Email copié !');
  });
});

// Nav toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('nav-hidden');
});

// Fade in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
