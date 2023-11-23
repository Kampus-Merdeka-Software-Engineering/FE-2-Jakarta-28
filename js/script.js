// Toggle Class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik 
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function(event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});
