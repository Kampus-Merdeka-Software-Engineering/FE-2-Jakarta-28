const logoutButton = document.getElementById("logout");

// Menghapus accesstoken dari localstorage agar ke logout
logoutButton.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    window.location.href = `login.html`;
});