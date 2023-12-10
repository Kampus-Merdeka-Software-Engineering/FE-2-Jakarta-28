const baseApiUrl = "https://be-2-jakarta-28-production.up.railway.app";

const apiRoutes = {
    login : `${baseApiUrl}/login`,
    news : `${baseApiUrl}/blogs`,
    newsBySlug : (slug) => `${baseApiUrl}/blogs/${slug}`,
    dashboardNews : `${baseApiUrl}/dashboardBlogs`,
    dashboardNewsBySlug : (slug) => `${baseApiUrl}/dashboardBlogs/${slug}`,
    dashboardUsers : `${baseApiUrl}/users`,
    dashboardUserById : (id) => `${baseApiUrl}/users/${id}`
};

export default apiRoutes;