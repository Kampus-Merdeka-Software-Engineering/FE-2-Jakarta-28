// Kemudian disini kita dapat ambil dulu formnya
const subscriberForm = document.getElementById("subscribe-form");

subscriberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    sendSubscriberEmail(email);
})

const sendSubscriberEmail = (email) => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "codeblogwebsite24@gmail.com",
        Password : "436EFD3E0368EC91A39129C87A4F94AD580E",
        Port : 2525,
        To : "codeblogwebsite24@gmail.com",
        From : "codeblogwebsite24@gmail.com",
        Subject : "New Subscriber",
        Body : `Hello Mr/Mrs from CodeBlog, I am interested and happy to join your community. You can send new blog about Programming to my email address : ${email}`,
    }).then ( () => {
        alert("Thank you for joining our community. We will notify you, if there is new blog abaout Programming");
    });
};