let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Adding shadow to nav bar
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 745);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal(
    { 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 50 
    }
);
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});

ScrollReveal().reveal('.home-image, .proj-container, .skills-box, .contact form', { origin: 'bottom'});

ScrollReveal().reveal('.home-content h1', { origin: 'left'});

ScrollReveal().reveal('.home-content p, .about p', { origin: 'right'});