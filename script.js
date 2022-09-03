const overlay=document.querySelector(".overlay")
const menuIcon=document.querySelector(".menu-bars")
const navItems=Array.from(document.querySelectorAll('.nav-items'))
const menu=document.querySelector('.menu')


function toggleMenuIcon(x) {
    x.classList.toggle("change");
}

function navItemsAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
  }


function slideInAnimation(){

    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    navItemsAnimation('out', 'in');
}


function slideOutAnimation(){

    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navItemsAnimation('in', 'out');

}


//Menu Icon Event Listener

menuIcon.addEventListener('click',()=>(menuIcon.classList.contains("change"))? slideInAnimation() : slideOutAnimation())

//Menu Event Listener

menu.addEventListener('click',()=>{

    slideOutAnimation()

    toggleMenuIcon(menuIcon)

})

