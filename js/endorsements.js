let currentSlide = 0;
const slides = document.getElementsByClassName('carousel-item');

function showSlide(n) {
    // Remove active class from all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Calculate the correct slide index
    currentSlide = n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Show the current slide
    slides[currentSlide].classList.add('active');
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize the carousel
showSlide(0);