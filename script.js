// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
});
