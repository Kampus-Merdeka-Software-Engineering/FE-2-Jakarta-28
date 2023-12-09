// Toggle Class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik 
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function(event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

// Animation kiri dan kanan
window.addEventListener("load", () => {
    const bagianKiri = document.querySelectorAll(".pKiri");
    const bagianKanan = document.querySelectorAll(".pKanan");

    bagianKiri.forEach((elementKiri) => {
        elementKiri.classList.add("pMuncul");
    })

    bagianKanan.forEach((elementKanan) => {
        elementKanan.classList.add("pMuncul");
    })
});

// Animation atas dan bawah
window.addEventListener("load", () => {
    const bagianAtas = document.querySelectorAll(".pAtas");
    const bagianBawah = document.querySelectorAll(".pBawah");

    bagianAtas.forEach((elementAtas) => {
        elementAtas.classList.add("pMunculAB");
    });

    bagianBawah.forEach((elementBawah) => {
        elementBawah.classList.add("pMunculAB");
    });
});




