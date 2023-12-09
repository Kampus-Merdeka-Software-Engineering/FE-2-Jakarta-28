import apiRoutes from "../constant/ApiRoutes.js";

// ini untuk fetch di front end user
export const loadAllUsers= async() => {
    try {
        const response = await fetch(apiRoutes.dashboardUsers, {
            method: "GET",
            // ini untuk fetch url tokennya
            headers: {
                'x-access-token': localStorage.getItem("accessToken")
            }
        });
    
        const responseJson = await response.json();
        if(response.status === 401) {
            return (window.location.href = "login.html");
        }
    
        return responseJson;
    } catch (error) {
        console.log(error);
    }
};

export const loadUserById = async(id) => {
    try {
        const response = await fetch(apiRoutes.dashboardUserById(id), {
            method: "GET",
            // ini untuk fetch url tokennya
            headers: {
                'x-access-token': localStorage.getItem("accessToken")
            }
        });
    
        const reponseJson = await response.json();
        if(response.status === 401) {
            return (window.location.href = "login.html");
        }
    
        return reponseJson;
    } catch (error) {
        console.log(error);
    }
};
