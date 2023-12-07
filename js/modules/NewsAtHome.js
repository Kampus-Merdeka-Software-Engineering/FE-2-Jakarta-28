import { loadAllNews } from "../api/fetchNews.js";
import formatDate from "../constant/FormatDate.js";


// Ini untuk return data 
const setNewsData = async () => {
    const news = await loadAllNews();
    console.log({news});

    const latestPostContainer = document.getElementById("latest-post-row");

    news.slice(0,3).forEach( (singleNews) => {
        const formatedDate = formatDate(singleNews.published_date);
        latestPostContainer.innerHTML += `
            <div class="post-card">
                <div class="image-post">
                    <img src="${singleNews.url}" alt="">
                </div>
                <div class="content">
                    <h3>${singleNews.title}</h3>
                    <p class="subtext">${singleNews.author} - ${formatedDate}</p>
                    <p class="post-content">${singleNews.content}</p>
                    <a onclick="redirectToSinglePost('${singleNews.slug}')"" class="read-more">Read More</a>
                </div>
            </div>
        `;
    });
}

setNewsData();