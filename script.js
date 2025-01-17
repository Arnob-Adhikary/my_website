let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

// Toggle navbar and icon active state
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
    if (!header.classList.contains('sticky')) {
        header.classList.toggle('sticky')
    } 
    else {
        if (window.scrollY < 80) {
            header.classList.remove('sticky')
        }
    }
};

let rightBtn = document.querySelector('#right-button')
let leftBtn = document.querySelector('#left-button')
let slideContainer = document.querySelector('.slide-container')

rightBtn.onclick = () => {
    slideContainer.scrollLeft += 500;
}
leftBtn.onclick = () => {
    slideContainer.scrollLeft -= 500;
}


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop-80;
        if (window.scrollY >= sectionTop) {
            currentSectionIndex = index;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.addEventListener('click', function() {
            // Close the navbar on mobile devices
            const navbar = document.querySelector('nav');
            navbar.classList.remove('active');
        });
    });

    navLinks[currentSectionIndex].classList.add('active');
    
    header.classList.toggle('sticky', window.scrollY > 80);
});

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home .home-img img, .education-content, .experience-container, .slide-container, .research-container, .about_me-main', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about_me-img img', { origin: 'left' });
