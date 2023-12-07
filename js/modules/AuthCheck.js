import apiRoutes from "../constant/ApiRoutes.js";

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(apiRoutes.authenticationCheck, {
        method: "GET",
        headers: {
            "content-type" : "application/json"
        },
    });
    
    if(response.status === 401 || response.status !== 200) {
        window.location.href = `login.html`;
        alert("Please Login first before accessing this page");
    };
    
    if(response.status === 200) {
        console.log("User Authenticated");
    }
});
