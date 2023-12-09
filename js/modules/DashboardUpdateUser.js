import { loadUserById } from "../api/fetchUsers.js";
import apiRoutes from "../constant/ApiRoutes.js";

const query = window.location.search;
const urlSearchParams = new URLSearchParams(query);
const id = urlSearchParams.get("id");

const loadUpdateUserById = async() => {
    const response = await loadUserById(id);
    console.log(response);

    document.getElementById("title-update-user").innerText = "Update User "+ response.name;
    document.getElementById("name").value = response.name;
    document.getElementById("email").value = response.email;
};

loadUpdateUserById();

const userUpdateForm = document.getElementById("update-user-form");

userUpdateForm.addEventListener("submit", (event) => {
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
            updateDataUserToDatabase(formData);
        } else {
            alert("Password and Confirm Password are not the same");
        }
    } else {
        updateDataUserToDatabase(formData);
    }
});

const updateDataUserToDatabase = async(formData) => {
    try {
        const response = await fetch(apiRoutes.dashboardUserById(id), {
            method: "PATCH",
            headers: {
                'x-access-token': localStorage.getItem("accessToken")
            },
            body : formData
        });
        console.log(response);
        if(response.status === 200) {
            alert("The User data has been updated successfully");
            window.location.href = `dashboardUsers.html`;
        } else {
            alert("Failed to update user data, Please check again!")
        }
    } catch (error) {
        console.log(error);
    }
}
