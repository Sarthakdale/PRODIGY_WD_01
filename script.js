// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        navbar.style.padding = "15px 5%";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.padding = "20px 5%";
    }
});
