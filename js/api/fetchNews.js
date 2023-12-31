import apiRoutes from "../constant/ApiRoutes.js";

// ini untuk fetch di front end user
export const loadAllNews = async() => {
    try {
        const response = await fetch(apiRoutes.news, {
            method: "GET",
        });
    
        const responseJson = await response.json();
    
        return responseJson;
    } catch (error) {
        console.log(error);
    }
};

export const loadNewsBySlug = async(slug) => {
    try {
        const response = await fetch(apiRoutes.newsBySlug(slug), {
            method: "GET",
        });
    
        const reponseJson = await response.json();
    
        return reponseJson;
    } catch (error) {
        console.log(error);
    }
}


// ini untuk fetch di dashboard
export const loadAllDashboardNews = async() => {
    try {
        const response = await fetch(apiRoutes.dashboardNews, {
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
}

export const loadDashboardNewsBySlug = async(slug) => {
    try {
        const response = await fetch(apiRoutes.dashboardNewsBySlug(slug), {
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
}