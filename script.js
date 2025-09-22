// ===== Hamburger Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Scroll Animation =====
const sections = document.querySelectorAll('section');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('show');
        }
      });

      ticking = false;
    });

    ticking = true;
  }
});

// ===== Resume Download (Optional) =====
// This ensures your "Download Resume" button works in all browsers
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function(e){
    e.preventDefault();
    const link = document.createElement('a');
    link.href = this.href; // Make sure this.href is absolute GitHub Pages URL
    link.download = 'Punyashree_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
