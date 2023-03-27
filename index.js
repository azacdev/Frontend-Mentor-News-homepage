const menu = document.querySelector(".menu-btn")
const closeMenu = document.querySelector(".close-btn")
const navMenu = document.querySelector(".nav-menu")
const body = document.querySelector("body")

function toggleMenu() {
    navMenu.classList.toggle("show-menu")
    if(navMenu.classList.contains('show-menu')) {
        body.classList.add("dim")
    }else {
        body.classList.remove("dim")
    }
}

menu.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click", toggleMenu)

