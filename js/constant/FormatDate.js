const formatDate = (originalDate) => {
    const date = new Date(originalDate);
    const day = date.getDate();
    const month = date.toLocaleDateString(`en-US`, {month: `long`});
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
};

export default formatDate;