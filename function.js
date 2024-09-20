let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 3 seconds
}
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    function slide() {
        currentIndex++;
        if (currentIndex === totalSlides / 2) {
            sliderWrapper.style.transition = 'none'; // Disable transition for instant reset
            currentIndex = 0;
            sliderWrapper.style.transform = `translateX(0px)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50); // Short delay to allow the reset
        } else {
            sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    // Start sliding in an infinite loop
    setInterval(slide, 1000); // Slide every 3 seconds
});



const images = ['ec178d83e5f597b162cda1e60cb64194.jpg', 'drink-4667507_1280.jpg', 'image3.jpg']; // Array of image paths
let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;

    document.getElementById('sliderImage').src = images[currentIndex];
}