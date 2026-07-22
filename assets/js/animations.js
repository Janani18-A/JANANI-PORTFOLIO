// ========== SCROLL ANIMATIONS ==========

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add delay for child elements
            const children = entry.target.querySelectorAll('.glass, .skill-card, .internship-card, .project-item, .edu-item, .cert-badge');
            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
                child.classList.add('visible');
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .fade-in').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== PARALLAX EFFECT ON HERO ==========
const hero = document.querySelector('.hero-section');
const heroImage = document.querySelector('.profile-photo');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && heroImage) {
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.top <= 0 && heroRect.bottom >= 0) {
            heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    }
});

// ========== PROJECT CARD TILT EFFECT ==========
/*
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});*/

// ========== TYPING EFFECT FOR ROLE ==========
document.addEventListener('DOMContentLoaded', () => {
    const roleElement = document.querySelector('.role-text');
    if (roleElement) {
        const roles = [
            'Aspiring Full Stack Developer',
            'Frontend Enthusiast',
            'Backend Explorer',
            'Problem Solver'
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = '';
        
        function typeRole() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                currentText = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }
            
            roleElement.textContent = currentText;
            
            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeRole, 2000);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
                return;
            }
            
            const speed = isDeleting ? 50 : 80;
            setTimeout(typeRole, speed);
        }
        
        setTimeout(typeRole, 1000);
    }
});