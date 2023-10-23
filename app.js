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

var icons = document.querySelectorAll('.fa');
        var selectedIcon = null;
        icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
        if (selectedIcon) {
          selectedIcon.style.color = 'black';
          selectedIcon.style.border = 'white';
        }
        icon.style.color = '#f54e07';
        icon.style.borderLeft = '4px solid #f54e07';
        icon.style.transition = '0.2s';
        selectedIcon = icon;
      });
    });

