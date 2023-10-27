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

