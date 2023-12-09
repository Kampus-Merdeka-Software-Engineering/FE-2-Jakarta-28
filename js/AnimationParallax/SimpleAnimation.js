// Animation parallax
window.addEventListener("scroll", () => {
    let wScroll = window.scrollY;

    let latestPostSection = document.getElementById("latest-post");
    if(wScroll > latestPostSection.offsetTop - 250) {
        let postCards = document.querySelectorAll("#latest-post-row .post-card");
        postCards.forEach((postCard, i) => {
            setTimeout(() => {
                postCard.classList.add("pMunculAB");
            }, 300 * (i+1));
        })
    }

    let chooseUsSection = document.getElementById("choose-us");
    if(wScroll > chooseUsSection.offsetTop - 250) {
        const animasiBawah = document.querySelector("#choose-us .row.pBawah-choose-us");

        animasiBawah.classList.add("pMunculAB");
    }

    let joinUsSection = document.getElementById("join-us");
    if(wScroll > joinUsSection.offsetTop - 250) {
        const animasiKiri = document.querySelector("#join-us .judul");
        const animasiKanan = document.querySelector("#join-us .content");

        animasiKiri.classList.add("pMuncul");
        animasiKanan.classList.add("pMuncul");
    }
});
