const bookSlides = document.querySelectorAll(".book_slide");

// Loop through slides and set each slide's translateX
bookSlides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// Select next slide button
const bookNextSlide = document.querySelector(".btn2-next");

// Current slide counter
let bookCurSlide = 0;
// Maximum number of slides
let bookMaxSlide = litSlides.length - 1;

// Add event listener and navigation functionality
bookNextSlide.addEventListener("click", function () {
  // Check if the current slide is the last and reset the current slide
  if (bookCurSlide === bookMaxSlide) {
    bookCurSlide = 0;
  } else {
    bookCurSlide++;
  }

  // Move the slide by -100%
  bookSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - bookCurSlide)}%)`;
  });
});

// Select previous slide button
const bookPrevSlide = document.querySelector(".btn2-prev");

// Add event listener and navigation functionality
bookPrevSlide.addEventListener("click", function () {
  // Check if the current slide is the first and reset the current slide to last
  if (bookCurSlide === 0) {
    bookCurSlide = bookMaxSlide;
  } else {
    bookCurSlide--;
  }

  // Move the slide by 100%
  bookSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - bookCurSlide)}%)`;
  });
});

