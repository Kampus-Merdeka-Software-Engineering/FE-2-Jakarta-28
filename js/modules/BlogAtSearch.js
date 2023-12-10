import { loadAllNews } from "../api/fetchNews.js";

// Format tanggal
const formatDate = (originalDate) => {
    const date = new Date(originalDate);
    const day = date.getDate();
    const month = date.toLocaleDateString(`en-US`, {month: `long`});
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

// Add event listener search area
const searchForm = document.getElementById("search-area");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = document.getElementById("search-text").value;
    filteredNews(keyword);
})

// Search function
const filteredNews = async(keyword) => {
    const news = await loadAllNews();
    // console.log({news});
    // console.log(keyword);
    const latestPostContainer = document.getElementById("blog-row-container");
    latestPostContainer.innerHTML = "";
    let newsFound = false;

    // Kemudian disini kita dapat kasih kondisi apabila keywordnya gak null baru kita cari didatabase
    if(keyword !== null || keyword !== "") {
        news.forEach( (singleNews) => {
            const titleMatch = singleNews.title.toLowerCase().includes(keyword.toLowerCase());
            const contentMatch = singleNews.content.toLowerCase().includes(keyword.toLowerCase());
            const authorMatch = singleNews.author.toLowerCase().includes(keyword.toLowerCase());
            const contentSlice = singleNews.content.slice(0, 120) + "...";
    
            if(titleMatch || contentMatch || authorMatch) {
                const formatedDate = formatDate(singleNews.published_date);
        
                latestPostContainer.innerHTML += `
                    <div class="post-card">
                        <div class="image-post">
                            <img src="${singleNews.url}" alt="">
                        </div>
                        <div class="content">
                            <h3>${singleNews.title}</h3>
                            <p class="subtext">${singleNews.author} - ${formatedDate}</p>
                            <p class="post-content">${contentSlice}</p>
                            <a onclick="redirectToSinglePost('${singleNews.slug}')"" class="read-more">Read More</a>
                        </div>
                    </div>
                `;
                newsFound = true;
            }
        });
    } 

    if(!newsFound) {
        latestPostContainer.innerHTML = "<p style='text-align: center;'>No news has been found.</p>"
    }
}


// Ini untuk return data 
const setNewsData = async () => {
    const news = await loadAllNews();
    console.log({news});

    const latestPostContainer = document.getElementById("blog-row-container");
    latestPostContainer.innerHTML = "";

    // Bedanya dengan news at home adalah disini akan dirender semuanya
    news.forEach( (singleNews) => {
        const formatedDate = formatDate(singleNews.published_date);
        const contentSlice = singleNews.content.slice(0, 120) + "...";
        latestPostContainer.innerHTML += `
            <div class="post-card">
                <div class="image-post">
                    <img src="${singleNews.url}" alt="">
                </div>
                <div class="content">
                    <h3>${singleNews.title}</h3>
                    <p class="subtext">${singleNews.author} - ${formatedDate}</p>
                    <p class="post-content">${contentSlice}</p>
                    <a onclick="redirectToSinglePost('${singleNews.slug}')"" class="read-more">Read More</a>
                </div>
            </div>
        `;
    });
}

setNewsData();