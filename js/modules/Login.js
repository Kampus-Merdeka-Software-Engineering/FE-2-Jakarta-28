import apiRoutes from "../constant/ApiRoutes.js";

const loginForm = document.getElementById("Login-Form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    Login(email, password);
})

const Login = async(email, password) => {
    try { 
        const response = await fetch(apiRoutes.login, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
        
        if(response.status === 200) {
            window.location.href = `dashboardBlog.html`;
        } else {
            console.log(response.message);
            alert("Incorrect email or password, Please try again!");
        }
    } catch (error) {
        console.log(error);
    }
}