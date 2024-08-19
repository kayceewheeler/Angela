document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLeft = document.querySelector('.nav-left');

    menuToggle.addEventListener('click', function() {
        navLeft.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-left a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLeft.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Header background change on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});