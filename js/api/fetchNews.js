import apiRoutes from "../constant/ApiRoutes.js";

export const loadAllNews = async() => {
    const response = await fetch(apiRoutes.news, {
        method: "GET",
    });

    const responseJson = await response.json();

    return responseJson;
};

export const loadNewsBySlug = async(slug) => {
    const response = await fetch(apiRoutes.newsBySlug(slug), {
        method: "GET",
    });

    const reponseJson = await response.json();

    return reponseJson;
}