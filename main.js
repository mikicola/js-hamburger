let hamburgerMenu = document.querySelector(".hamburger-menu")
let hamburgerIcon = document.querySelector(".fas.fa-bars")
let hamburgerX = document.querySelector(".fas.fa-times")


hamburgerIcon.addEventListener("click",function(){
    hamburgerMenu.classList.add("active")
})

hamburgerX.addEventListener("click",function(){
    hamburgerMenu.classList.remove("active")
})