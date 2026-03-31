const projectList = [
    {
        id: 1,
        number: "01",
        name: "E-commerce Website",
        title: "Frontend E-commerce Project",
        description: "Developed a responsive e-commerce website featuring static product categories such as computers, smartphones, and speakers. Implemented add-to-cart functionality using JavaScript and localStorage, focusing on dynamic UI updates and smooth user experience.",
        techStack: ["HTML", "CSS", "Javascript"],
        image: "assets/projects/ecom.png",
        liveLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        number: "02",
        name: "Portfolio Website",
        title: "Personal Portfolio",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and experience. Built with a clean and responsive UI, including sections like About, Skills, Projects, and Contact, focusing on user-friendly navigation and modern design.",
        techStack: ["HTML", "CSS", "Javascript"],
        image: "assets/projects/portfolio.png",
        liveLink: "#",
        githubLink: "#"
    }
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
    <div class="project-info">
                <h3>${projectContent?.number}</h3>
                <h4>${projectContent?.title}</h4>
                   <p>${projectContent?.description}</p>
                     <div class="tech-stack">
                        ${projectContent?.techStack?.map((tech, i) => {
                            return`
                            <span key=${i}>${tech}<span/>
                            `;
                        })
                        .join(",")
                    }
                     </div>
                  <hr />

                   <div class="links">
                       <a href= ${projectContent?.liveLink}>
                          <i class="ph ph-arrow-up-right"></i>
                      </a>
                       <a href=${projectContent?.githubLink}>
                           <i class="ph ph-github-logo"></i>
                     </a>
                 </div>
               </div>

                <div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title}/>
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled? "disabled-btn":""}>
                            <i class="ph ph-caret-left"></i>
                        </a>
                        <a href="#" id="next" class=${nextDisabled? "disabled-btn":""}>
                            <i class="ph ph-caret-right"></i>
                        </a>
                    </div>
                </div>
     `;

     document.getElementById('previous').addEventListener("click", (e) =>{
        e.preventDefault();

        if(currentIndex > 0){
            currentIndex--;
            renderProject(currentIndex);
        }
     });

     document.getElementById('next').addEventListener("click", (e) =>{
        e.preventDefault();

        if(currentIndex < projectList.length - 1){
            currentIndex++;
            renderProject(currentIndex);
        }
     });
};

renderProject(currentIndex);



