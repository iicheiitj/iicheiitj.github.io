let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("carousel-item");
  const dots = document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("button");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  // Move to the next slide
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Show the current slide
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  // Repeat the function every 3 seconds
  setTimeout(showSlides, 10000);
}

// Call the function to start the slideshow
showSlides();
