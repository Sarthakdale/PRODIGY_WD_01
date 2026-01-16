// --- 1. NAVIGATION BAR SCROLL EFFECT ---
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var navbar = document.getElementById("navbar");
    
    // Toggles the "scrolled" class based on scroll position
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// --- 2. MOBILE MENU TOGGLE ---
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation (Turn into X)
    burger.classList.toggle('toggle');
});
