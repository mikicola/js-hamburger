let hamburgerMenu = document.querySelector(".hamburger-menu")
let hamburgerIcon = document.querySelector(".fas.fa-bars")

hamburgerIcon.addEventListener("click",function(){
    hamburgerMenu.classList.add("active")
})