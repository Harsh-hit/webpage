"use strict";
let intro= document.querySelector(".intro")
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                 span.classList.add('active');
            },(idx+1)*200)

        })
        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                span.classList.remove("active");
                span.classList.add("fade");

            },(idx+1)*500)   
        },2000); 
        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2000)

    })
    
})

function scrollToSection(sectionId, offset) {
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}
function scrollToImage(imageId) {
    const targetImage = document.getElementById(imageId);
    if (targetImage) {
        targetImage.scrollIntoView({
            behavior: 'smooth',
            block: 'start',  // Align the top of the target image with the top of the viewport
        });

        return false; // Prevent the default link behavior
    }
}
var cards = document.getElementsByClassName('card1'),
    transforms = [
  { x: 0,
    z: 0,
    scale: 1,
    opacity: 1
  },
  { x: '-55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  },
        {
    x: '-110%',
    z: '-100px',
    scale: 0.6,
    opacity: 0.6
  },
        {
    x: '110%',
    z: '-100px',
    scale: 0.6,
    opacity:0.6
  },
  {
    x: '55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  }


];

var nextTransform = function(x) {
  if (x >= cards.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function next() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform = 
      'translateX(' + transforms[nextTransform(i)].x + ') ' + 
      'translateZ(' + transforms[nextTransform(i)].z + ') ' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    cards[i].style.opacity = transforms[nextTransform(i)].opacity;
  }
  transforms.push(transforms.shift());
}
  
document.getElementById('carousel').onclick = function() {
  next();  
};

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

$(document).ready(function(){
  $('.eve-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    arrows: true,
    prevArrow: $('.left-btn'),
    nextArrow: $('.right-btn')
  });
});



