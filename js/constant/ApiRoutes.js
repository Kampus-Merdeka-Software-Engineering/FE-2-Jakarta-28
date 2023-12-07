const baseApiUrl = "http://localhost:5000";

const apiRoutes = {
    authenticationCheck : `${baseApiUrl}/me`,
    login : `${baseApiUrl}/login`,
    news : `${baseApiUrl}/blogs`,
    newsBySlug : (slug) => `${baseApiUrl}/blogs/${slug}`
};

export default apiRoutes;