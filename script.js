document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu-mobile');

    hamburgerMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


const testimonials = document.querySelectorAll('.testimonial');

window.addEventListener('scroll', function() {
    testimonials.forEach(testimonial => {
        const testimonialPosition = testimonial.getBoundingClientRect().top;
        const customWindowHeight = window.innerHeight * 0.85; // Adjust the multiplier as needed
        if (testimonialPosition < customWindowHeight ) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active'); // Remove the class when scrolling up
        }
    });
});

const overMijContent = document.querySelector('.over-mij-content');
const overMijImage = document.querySelector('.over-mij-image');

window.addEventListener('scroll', function() {
    const overMijContentPosition = overMijContent.getBoundingClientRect().top;
    const overMijImagePosition = overMijImage.getBoundingClientRect().top;
    const customWindowHeight = window.innerHeight * 0.75; // Adjust the multiplier as needed
    
    if (overMijContentPosition < customWindowHeight ) {
        overMijContent.classList.add('slide-left');
    }else {
        overMijContent.classList.remove('slide-left'); // Remove the class when scrolling up
    }
    
    
    if (overMijImagePosition < customWindowHeight ) {
        overMijImage.classList.add('slide-right');
    }else {
        overMijImage.classList.remove('slide-right'); // Remove the class when scrolling up
    }
});

