// ========== MAIN JAVASCRIPT ==========

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========== CONSOLE GREETING ==========
console.log('%c🚀 Janani A - Full Stack Developer Portfolio', 'font-size: 20px; font-weight: bold; color: #E63946;');
console.log('%c💻 Built with ❤️ using HTML, CSS, JavaScript & PHP', 'font-size: 14px; color: #B0B0B0;');

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolled down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Optional: Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.4s ease';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});