import { loadNewsBySlug } from "../api/fetchNews.js";
import formatDate from "../constant/FormatDate.js";

const setSingleNewsDetail = async() => {
    const query = window.location.search;
    const urlSearchParams = new URLSearchParams(query);

    const slug = urlSearchParams.get("slug");
    const response = await loadNewsBySlug(slug);
    console.log(response);

    const FormatDate = formatDate(response.published_date);

    document.getElementById("title").innerText = response.title;
    document.getElementById("author-and-publishedDate").innerText = "By " + response.author + " - " + FormatDate;
    document.getElementById("image-single-news").src = response.url;
    document.getElementById("content-paragraph").innerText = response.content;

}

setSingleNewsDetail();