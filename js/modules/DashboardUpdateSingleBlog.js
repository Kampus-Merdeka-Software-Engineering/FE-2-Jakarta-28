import { loadNewsBySlug } from "../api/fetchNews.js";
import apiRoutes from "../constant/ApiRoutes.js";
import formatDateInput from "../constant/FormatDateInput.js";

const query = window.location.search;
const urlSearchParams = new URLSearchParams(query);
const slug = urlSearchParams.get("slug");

const loadUpdateNewsBySlug = async() => {
    const response = await loadNewsBySlug(slug);
    console.log(response);
    const formattedDate = formatDateInput(response.published_date);
    console.log(formattedDate);

    document.getElementById("heading").innerText = "Update " + response.title; 
    document.getElementById("title").value = response.title;
    document.getElementById("author").value = response.author;
    document.getElementById("slug").value = response.slug;
    document.getElementById("old-slug").value = response.slug;
    document.getElementById("published_date").value = formattedDate;
    document.getElementById("content").innerText = response.content;
    document.getElementById("imagePreview").src = response.url;document.getElementById("imagePreview").style.display = "inline-block";
}

loadUpdateNewsBySlug();

// Ketika form diupdate
const dashboardUpdateContainer = document.getElementById("dashboard-update-news");

dashboardUpdateContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const slug = document.getElementById("slug").value;
    const oldSlug = document.getElementById("old-slug").value;
    const published_date = document.getElementById("published_date").value;
    const file = document.getElementById("image").files[0];
    const content = document.getElementById("content").value;
    console.log(title, slug, oldSlug, author, file, published_date, content);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("author", author);
    formData.append("published_date", published_date);
    formData.append("content", content);
    formData.append("file", file);

    updateDatatoDatabse(formData, oldSlug);
});

const updateDatatoDatabse = async(formData, oldSlug) => {
    console.log(oldSlug, formData);
    try {
        const response = await fetch(apiRoutes.newsBySlug(oldSlug), {
            method: "PATCH", 
            body: formData
        });
        console.log(response);
        if(response.status === 200) {
            alert("The Blog has been updated successfully");
            window.location.href = 'dashboardBlog.html';
        } else {
            alert("Failed Update Blog, Please check again");
        }
    } catch (error) {
        console.log(error);
    }
}
