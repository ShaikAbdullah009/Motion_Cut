let currentSlide = 0;
const slides = document.querySelectorAll(".slider-images img");
const totalSlides = slides.length;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;
  document.querySelector(".slider-images").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize slider on page load
showSlide(currentSlide);
