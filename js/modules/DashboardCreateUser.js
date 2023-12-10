import apiRoutes from "../constant/ApiRoutes.js";

const createUserForm = document.getElementById("create-user-form");

createUserForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    
    if(password !== null) {
        if(password === confirmPassword) {
            formData.append("password", password);
            formData.append("confirmPassword", confirmPassword);
            
            createNewUser(formData);
        } else {
            alert("Password and Confirm Password did not match, Please Try Again!");
        }
    }
});

const createNewUser = async (formData) => {
    try {
        const response = await fetch(apiRoutes.dashboardUsers, {
            method: "POST",
            headers: {
                'x-access-token': localStorage.getItem("accessToken")
            },
            body: formData
        });

        if(response.status === 200) {
            console.log(response);
            window.location.href = `dashboardUsers.html`;
        }
    } catch (error) {
        console.log(error);
    }
}