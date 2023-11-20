"use strict";

// book mark javascript
$(document).ready(function () {
  var $slider = $("#book_slider");
  var slideLength = $("#book_slider > .slide").length - 1;
  var is3D = false;

  $(".slide").click(function () {
      if (is3D) {
          nextSlide();
      } else {
          prevSlide();
      }
  });

  $(".key.ctrl").mousedown(function () {
      is3D = true;
      $(this).addClass("active");
  }).mouseup(function () {
      is3D = false;
      $(this).removeClass("active");
  });

  function nextSlide() {
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide').slice(0, 1);
          $slider.append($slicedSlide);
          $slider.removeClass("transfomer");
      }, 500); // Increased the timeout for smoother animation
  }

  function prevSlide() {
      lastElem().addClass("active");
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide').slice(slideLength);
          $slider.prepend($slicedSlide);
          $(document).find(".slide.active").removeClass("active");
          $slider.removeClass("transfomer");
      }, 50);
  }

  function lastElem() {
      return $("#book_slider > .slide").last();
  }
});


// crescentia events javascript
$(document).ready(function () {
  var $slider = $("#slider1");
  var slideLength = $("#slider1 > .slide1").length - 1;
  var is3D = false;

  $(".slide1").click(function () {
      if (is3D) {
          nextSlide();
      } else {
          prevSlide();
      }
  });

  $(".key.ctrl").mousedown(function () {
      is3D = true;
      $(this).addClass("active");
  }).mouseup(function () {
      is3D = false;
      $(this).removeClass("active");
  });

  function nextSlide() {
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide1').slice(0, 1);
          $slider.append($slicedSlide);
          $slider.removeClass("transfomer");
      }, 500); // Increased the timeout for smoother animation
  }

  function prevSlide() {
      lastElem().addClass("active");
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide1').slice(slideLength);
          $slider.prepend($slicedSlide);
          $(document).find(".slide1.active").removeClass("active");
          $slider.removeClass("transfomer");
      }, 50);
  }

  function lastElem() {
      return $("#slider1 > .slide1").last();
  }
});

// Literati Javascript
$(document).ready(function () {
  var $slider = $("#slider2");
  var slideLength = $("#slider2 > .slide2").length - 1;
  var is3D = false;

  $(".slide2").click(function () {
      if (is3D) {
          nextSlide();
      } else {
          prevSlide();
      }
  });

  $(".key.ctrl").mousedown(function () {
      is3D = true;
      $(this).addClass("active");
  }).mouseup(function () {
      is3D = false;
      $(this).removeClass("active");
  });

  function nextSlide() {
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide2').slice(0, 1);
          $slider.append($slicedSlide);
          $slider.removeClass("transfomer");
      }, 500); // Increased the timeout for smoother animation
  }

  function prevSlide() {
      lastElem().addClass("active");
      $slider.addClass("transfomer");
      setTimeout(function () {
          var $slicedSlide = $('.slide2').slice(slideLength);
          $slider.prepend($slicedSlide);
          $(document).find(".slide2.active").removeClass("active");
          $slider.removeClass("transfomer");
      }, 50);
  }

  function lastElem() {
      return $("#slider2 > .slide2").last();
  }
});



// intro - YES THIS IS THE INTRO JAVASCRIPT
$(document).ready(function(){
  $('.eve-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.left-btn'),
    nextArrow: $('.right-btn'),
  });
});
let intro= document.querySelector(".intro")
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")


window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                 span.classList.add('active');
            },(idx+1)*150)
        })
        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                span.classList.remove("active");
                span.classList.add("fade");

            },(idx+1)*20)   
        },1300); 
        setTimeout(()=>{
            intro.style.top = '-100vh';
        },1300)

    })
    
})


// NAVBAR JAVASCRIPT
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

