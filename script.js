/* Menu Toggle */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Assuming using Boxicons class for 'x' if present, otherwise no visual change to icon itself but functionality works. Replaced fa-bars with fa-xmark in logic if needed, but styling handles this.
    // For font awesome
    if (menuIcon.querySelector('i').classList.contains('fa-bars')) {
        menuIcon.querySelector('i').classList.remove('fa-bars');
        menuIcon.querySelector('i').classList.add('fa-xmark');
    } else {
        menuIcon.querySelector('i').classList.remove('fa-xmark');
        menuIcon.querySelector('i').classList.add('fa-bars');
    }

    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.querySelector('i').classList.add('fa-bars');
    menuIcon.querySelector('i').classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* Typing Animation */
const textElement = document.querySelector('.text-animate');
const roles = ['MERN Stack Developer', 'Student', 'Python Enthusiast', 'Web Designer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Pause before new word
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener('DOMContentLoaded', type);


/* Custom Cursor */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // animate outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
