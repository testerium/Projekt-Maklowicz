const hamburger = document.getElementById("hamburger_menu");
const closeMenu = document.getElementById("close_menu");
const navMenu = document.getElementById("nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.add("active");
    closeMenu.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    closeMenu.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.classList.add("active");
})
