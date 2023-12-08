import apiRoutes from "../constant/ApiRoutes.js";

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