const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
})

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section

        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "2025 - Present",
                    position: "Frontend Developer (Projects)",
                    company: "Personal & Academic Projects",
                    details: "Built multiple responsive web interfaces focusing on clean UI/UX design and performance optimization. Worked with modern JavaScript concepts, modular code structure, and efficient styling techniques to enhance usability and maintainability."
                },
                {
                    id: 2,
                    date: "2025",
                    position: "E-commerce Website Developer",
                    company: "Academic Project",
                    details: "Developed a responsive e-commerce web application using HTML, CSS, and JavaScript. Implemented product listing, add-to-cart functionality, and localStorage-based cart management. Optimized UI performance and ensured seamless user experience through dynamic DOM manipulation."
                },
                {
                    id: 3,
                    date: "2025 - Present",
                    position: "Online Voting System Developer",
                    company: "Self Project",
                    details: "Currently developing a full-stack online voting system using PHP, MySQL, and JavaScript. Implementing user authentication, secure vote casting, and result management with focus on data integrity, backend logic, and responsive interface design."
                },
                {
                    id: 4,
                    date: "2024",
                    position: "Web Development Learner",
                    company: "Skill Development",
                    details: "Gained strong foundation in web development including HTML, CSS, JavaScript, and Git/GitHub. Practiced building real-world projects, debugging issues, and improving problem-solving skills through continuous learning."
                },
                {
                    id: 5,
                    date: "2025",
                    position: "Website Deployment & Version Control",
                    company: "Personal Experience",
                    details: "Managed project deployment and version control using Git and GitHub. Handled repository setup, commits, and resolved issues related to hosting, file structure, and module loading to ensure smooth website performance."
                }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                 <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
            })
                .join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2023 - 2026",
                    degree: "Bachelor of Computer Applications (BCA)",
                    institution: "Manipal University Jaipur",
                    details: "Currently pursuing BCA with focus on web development, data structures, and database management. Gaining hands-on experience through academic projects and practical implementation."
                },
                {
                    id: 2,
                    date: "2022 - 2023",
                    degree: "Class 12th (Senior Secondary)",
                    institution: "KIIT World School",
                    details: "Completed higher secondary education with emphasis on analytical thinking and foundational knowledge for further studies in computer applications."
                },
                {
                    id: 3,
                    date: "2020 - 2021",
                    degree: "Class 10th (Secondary)",
                    institution: "St. Prayag Public School",
                    details: "Completed secondary education focusing on overall academic development, discipline, and problem-solving skills."
                }
            ];

            const educationContent = educationList.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
            })
                .join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector('.skill-list');

            const skillList = [
                {
                    id: 1,
                    name: "HTML",
                    icon: "assets/skills/html.png"
                },
                {
                    id: 2,
                    name: "CSS",
                    icon: "assets/skills/css.png"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "assets/skills/js.png"
                },
                {
                    id: 4,
                    name: "MySQL",
                    icon: "assets/skills/mysql.png"
                },
                {
                    id: 5,
                    name: "Git",
                    icon: "assets/skills/git.png"
                },
                {
                    id: 6,
                    name: "GitHub",
                    icon: "assets/skills/github.png"
                }
            ];

            const skillContent = skillList.map((ele) => {
                return `
               <div class="skill-box" key=${ele?.id}>
                        <img src=${ele.icon} alt=${ele.name} title=${ele.name} loading="lazy">
                    </div>
                `
            })
                .join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me") {
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Niyati Jain"
                },
                {
                    id: 2,
                    key: "Country : ",
                    value: "India"
                },
                {
                    id: 3,
                    key: "Industry : ",
                    value: "Web Development"
                },
                {
                    id: 4,
                    key: "Experience : ",
                    value: "Fresher"
                },
                 {
                    id: 5,
                    key: "Address : ",
                    value: "3691/8, Tri Nagar, Narang Colony, New Delhi"
                }
            ];

            const infoContent = infoList.map((ele) => {
                return`
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                <span>${ele?.value}</span>
                </div>
                `
            })
            .join("");

             if(myInfo){
                myInfo.innerHTML=infoContent;
             }
        }
    });
});
