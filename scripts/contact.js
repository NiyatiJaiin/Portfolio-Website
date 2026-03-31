const media = document.querySelector(".contact-media");



const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "phone",
        value: "+91 9818457693",
        href: "+919818457693"
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-mail",
        value: "niyatijain05206@gmail.com",
        href: "mailto:niyatijain05206@gmail.com"
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "India",
        href: "#"
    }
];

const contactContent = contactList.map((ele) => {
    return `
            <div class="media" key=${ele?.id}>
                <span>
                    <i class="${ele?.icon}"></i>
                </span>

                <div class="contact-value">
                    <p>${ele?.name}</p>
                    <a href=${ele?.href}>${ele?.value}</a>
                </div>
            </div>
    `
})
    .join("");

if (media) {
    media.innerHTML = contactContent;
}

//send contact message

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow
};

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style, originalStyle);

        sendBtn.disabled = false;

        return Toastify({
            text: "All Fields are Mandatory!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();
    }

    emailjs.send("service_jry3yxy", "template_owtndgs", {
        name, email, phone, message
    }).then(() => {
        Toastify({
            text: "Message Sent.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgb(9,222,38)",
            },
        }).showToast();

        setTimeout(() => {
            sendBtn.innerHTML = originalText;

            Object.assign(sendBtn.style, originalStyle);

            sendBtn.disabled = false;
        }, 2000);

    }, (error) => {
        Toastify({
            text: "Message Failed!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();

         console.log('FAILED...', error);
    });
});
