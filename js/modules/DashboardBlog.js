import {loadAllDashboardNews} from "../api/fetchNews.js";

const loadNewsAtTable = async () => {
    const news = await loadAllDashboardNews();
    // console.log({news});

    const blogDataContainer = document.getElementById("blog-data-row");
    
    blogDataContainer.innerHTML = "";

    news.forEach((singleNews, index) => {
        blogDataContainer.innerHTML += `
            <tr>
                <td data-cell="No">${index + 1}</td>
                <td data-cell="Title">${singleNews.title}</td>
                <td data-cell="Slug">${singleNews.slug}</td>
                <td data-cell="Image">${singleNews.url}</td>
                <td data-cell="Author">${singleNews.author}</td>
                <td data-cell="Published Date">${singleNews.published_date}</td>
                <td data-cell="Content" class="down">${singleNews.content}</td>
                <td data-cell="Action" class="down">
                    <a class="update" onclick="redirectToUpdateSingleNews('${singleNews.slug}')">Update</a>
                    <a class="delete" onclick="deleteBlog('${singleNews.slug}')">Delete</a>
                </td>
            </tr>
        `;
    })
}

loadNewsAtTable();

