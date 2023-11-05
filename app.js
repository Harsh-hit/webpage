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

