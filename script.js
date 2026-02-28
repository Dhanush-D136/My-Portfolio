// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close nav on item click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('bx-x');
        hamburger.querySelector('i').classList.add('bx-menu');
    });
});

// Active Link highlighting on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Scroll Reveal Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Initialize tsParticles (Neural Network / Data Flow Effect)
document.addEventListener("DOMContentLoaded", function () {
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: {
            color: "transparent",
        },
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#D4AF37", // Gold
            },
            links: {
                enable: true,
                color: "#D4AF37",
                distance: 150,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out",
            },
            size: {
                value: { min: 1, max: 3 },
            },
            opacity: {
                value: { min: 0.3, max: 0.7 },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.8,
                    },
                },
                push: {
                    quantity: 3,
                },
            },
        },
        detectRetina: true,
    });
});
