const toggle = document.getElementById('menu-toggle');
if (toggle && toggle.checked) {
        document.body.classList.add('no-scroll');
}else {
     document.body.classList.remove('no-scroll');
}

const words = ["Youtuber", "Student", "Creater", "Freelancer", "Developer", "Mentor"]

const typingText = document.getElementById('typing-span')

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    if (words?.length) type();
}
);

const navlinks = document.querySelectorAll('.navlink');
const tabs = document.querySelectorAll('.content');

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if (1 === link) {
                link.classList.add("active");
            } else {
                l.classList.remove("active")
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        })

        if (tabName === "services") {
            const serviceList = [{
                id: 1,
                icon: "ph-code",
                text: "Frontend Development",
                para: "I build responsive and modern websites using HTML, CSS, and JavaScript with a focus on performance and user experience."
            },
            {
                id: 2,
                icon: "ph-devices",
                text: "Responsive Web Design",
                para: "I design websites that adapt seamlessly to mobile, tablet, and desktop screens using madern ayout techniques."
            },
            {
                id: 3,
                icon: "ph-file-js",
                text: "JavaScript Functionality",
                para: "I implement interactive features like dynamic UI updates, add-to-cart systems, and smooth user interactions."
            },
            {
                id: 4,
                icon: "ph-shopping-cart",
                text: "E-commerce Development",
                para: "I develop basic websites with features like product listing, cart functionality, and local storage integration."
            },
            {
                id: 5,
                icon: "ph-palette",
                text: "UI Design",
                para: "I create clean and visually appealing user interfaces with proper layout, colors, and usability principles."
            },
            {
                id: 6,
                icon: "ph-speedometer",
                text: "Website Optimization",
                para: "I improve website performance by optimizing loading speed, structure, and overall user experience."
            }
            ];

            const services = document.getElementsByClassName("service-list");
            const innerContent = serviceList.map((l) => {
                return `
                <div class="box" key=${l?.id}>
                <div class="head-icons">
                    <i class="ph ${l?.icon}"></i>
                    <span>
                        <i class="ph ph-arrow-down-right"></i>
                    </span>
                </div>
                <h3>${l?.text}</h3>

                <span class="spacer"></span>
                <p>${l?.para}</p>
               </div>`
            }).join("");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
            });
        }

        toggle.checked = false;
    });
});
