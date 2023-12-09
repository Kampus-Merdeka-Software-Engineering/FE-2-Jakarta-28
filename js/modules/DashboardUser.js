import { loadAllUsers } from "../api/fetchUsers.js";

const loadUsersAtTable = async() => {
    const users = await loadAllUsers();
    // console.log(users);

    const dashboardDataUserContainer = document.getElementById("dashboard-user-container");

    users.forEach( (user, index) => {
        dashboardDataUserContainer.innerHTML += `
            <tr>
                <td data-cell="No">${index+1}</td>
                <td data-cell="Id">${user.uuid}</td>
                <td data-cell="Name">${user.name}</td>
                <td data-cell="Email">${user.email}</td>
                <td data-cell="Action" class="down">
                    <a class="update" onclick="redirectToUpdateSingleUser('${user.uuid}')">Update</a>
                    <a class="delete" onclick="deleteUser('${user.uuid}')">Delete</a>
                </td>
            </tr>
        `;
    });
}

loadUsersAtTable();