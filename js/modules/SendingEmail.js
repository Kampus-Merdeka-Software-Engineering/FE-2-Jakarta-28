// Kemudian disini kita dapat ambil element form send emailnya
const formSendEmail = document.getElementById("send-email");

// Lalu kita dapat tambahkan event listener apabila di submit
formSendEmail.addEventListener("submit", (event) => {
    event.preventDefault();

    // Kemudian disini apabila sudah diklik submit, maka kita akan panggil fungsi send emailnya
    sendEmail();
})

function sendEmail () {
    // Ambil data dari formulir
    const full_name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone-number").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Kemudian disini kita dapat membuat variabel global untuk reader dan data uri
    var reader;
    var dataUri;

    // Kemudian kita dapat select input imagenya
    var file = document.getElementById("image").files[document.getElementById("image").files.length-1];

    // Lalu kita dapat deklarasikan new reader
    reader = new FileReader();

    // Setelah itu filenya kita dapat ubah jadi binar agar gampang di sendnya
    reader.readAsBinaryString(file);

    // Kemudian disini kita dapat menggunakan onLoad untuk membuat data urinya
    reader.onload = function () {
        dataUri = "data: "+ file.type + ";based64," + btoa(reader.result);

        // Konfigurasi email smtp untuk disend bersama attachment
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "codeblogwebsite23@gmail.com",
            Password : "CC1D9F451A54F5B3997796602A85CF8C4E28",
            Port : 2525,
            To : "codeblogwebsite23@gmail.com",
            From : "codeblogwebsite23@gmail.com",
            Subject : "New Content About Programming Insight",
            Body : `Hello Mr/Mrs from CodeBlog, <br> <br> My name is ${full_name}. You can contact me at ${email} or you can chat with me at ${phone_number}. On this opportunity, I want to share a new insight about Programming. Hope this content can help a lot of people. <br> <br> The title of the content : ${title} <br> <br> The Content/Paragraph : <br> ${content} <br> <br> Here I also attach the image that can be use as an illustration. Thank You!`,
            Attachments: [{
                name : file.name,
                data: dataUri
            }],
        }).then(
            alert("Your email has been sent successfully. We will notify you soon.")
        )
    }
};