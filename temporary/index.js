"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


// Literati
// Literati section
const litSlides = document.querySelectorAll(".literati_slide");

// Loop through slides and set each slide's translateX
litSlides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// Select next slide button
const litNextSlide = document.querySelector(".btn1-next");

// Current slide counter
let litCurSlide = 0;
// Maximum number of slides
let litMaxSlide = litSlides.length - 1;

// Add event listener and navigation functionality
litNextSlide.addEventListener("click", function () {
  // Check if the current slide is the last and reset the current slide
  if (litCurSlide === litMaxSlide) {
    litCurSlide = 0;
  } else {
    litCurSlide++;
  }

  // Move the slide by -100%
  litSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - litCurSlide)}%)`;
  });
});

// Select previous slide button
const litPrevSlide = document.querySelector(".btn1-prev");

// Add event listener and navigation functionality
litPrevSlide.addEventListener("click", function () {
  // Check if the current slide is the first and reset the current slide to last
  if (litCurSlide === 0) {
    litCurSlide = litMaxSlide;
  } else {
    litCurSlide--;
  }

  // Move the slide by 100%
  litSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - litCurSlide)}%)`;
  });
});


//Book Mark Section
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

