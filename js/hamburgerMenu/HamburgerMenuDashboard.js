// Navigation Dashboard
const navbarNavDashboard = document.querySelector(".navbar-nav-dashboard");
const hamburgerMenuDashboard = document.getElementById(
    "hamburger-menu-dashboard"
);

hamburgerMenuDashboard.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNavDashboard.classList.toggle("active");
});

// Kalau di klik diluar itu, maka akan ketutup sendiri navigationnya
document.addEventListener("click", function (event) {
    if (!hamburgerMenuDashboard.contains(event.target) &&!navbarNavDashboard.contains(event.target)) {
        navbarNavDashboard.classList.remove("active");
    }
});
