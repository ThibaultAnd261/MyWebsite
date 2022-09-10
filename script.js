// ----Partie menu burger

// permet l'utilisation du menu burger
function burgerMenu() {
    const navLinks = document.querySelector(".navbar-links");
    const toggleIcon = document.querySelector(".burger-icon");
    switch (navLinks.classList.contains("menu-close-mobile")) {
        case true: // ajouter la classe "menu-open-mobile" pour l'animation sur l'axe Y, de haut en bas
            navLinks.classList.remove("menu-close-mobile");
            navLinks.classList.toggle("menu-open-mobile");
            toggleIcon.src = "./assets/icon/cross.png"
            break;

        case false:
            if (navLinks.classList.contains("menu-open-mobile")) { // ajouter la classe "menu-close-mobile" pour l'animation sur l'axe Y, de bas en haut et enlever la classe "menu-open-mobile"
                navLinks.classList.remove("menu-open-mobile");
                navLinks.classList.toggle("menu-close-mobile");
                toggleIcon.src = "./assets/icon/burger-icon.png"
                break
            }
            if (!(document.body.classList.contains("menu-close-mobile"))) { // permet d'ajouter instantanément la classe "menu-open-mobile" au premier clic 
                navLinks.classList.toggle("menu-open-mobile");
                toggleIcon.src = "./assets/icon/cross.png"
                break;
            }
        default:
            break;
    }
}

// ----Partie thème

let theme = 0; // 0 = nuit, 1 = jour
// changement de thème (nuit/jour)
function websiteTheme() {
    const themeIcon = document.querySelector('.light-icon');
    const waveSvg = document.querySelector('.wave');
    if (theme == 0) { // nuit à jour
        document.documentElement.style.setProperty('--navbar-color', '#333652');
        document.documentElement.style.setProperty('--navbar-color2', '#474959');
        document.documentElement.style.setProperty('--writing-color', '#fff');
        document.documentElement.style.setProperty('--icon-filled-color', '#FAD02C');
        document.documentElement.style.setProperty('--header-info-color', '#888888');
        waveSvg.style.fill = '#474959';
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        theme++;
    } else { // jour à nuit  
        document.documentElement.style.setProperty('--navbar-color', '#FAD02C');
        document.documentElement.style.setProperty('--navbar-color2', '#f6d861');
        document.documentElement.style.setProperty('--writing-color', '#000');
        document.documentElement.style.setProperty('--icon-filled-color', '#333652');
        document.documentElement.style.setProperty('--header-info-color', '#fff');
        waveSvg.style.fill = '#f6d861';
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        theme--;
    }
}

// ----Partie texte du header

var sentences = [
    { "sentence": "Bienvenue sur mon portfolio" },
    { "sentence": "Bonne navigation" },
    { "sentence": "N'hésitez pas à me contacter" }
];

function headerText(index) {
    const sentenceDiv = document.querySelector('.header-sentence');
    sentenceDiv.textContent = sentences[index].sentence;
    return 1;
}

let index = 0; // permet l'affichage d'une certaine phrase en fonction de l'index
headerText(index);
index++;

const countDownSentence = setInterval(() => {
    headerText(index);
    index++;
    if (index == sentences.length) {
        index = 0;
    }
    // console.log(index);
}, 5000);

// ----Partie projet

fetch("projects.json")
    .then(res => res.json())
    .then(data => {
        // let namePr = document.querySelector('.project-name');
        let gridPr = document.querySelector('.projects-grid');
        console.log(data);
        // console.log(namePr);
        data.forEach(element => {
            const project = document.createElement("div");
            project.classList.add("project");

            const projectName = document.createElement("h3");
            const projectDescr = document.createElement("p");
            const projectCate = document.createElement("div");
            projectCate.classList.add("project-category");

            const projectLang = document.createElement("div");
            projectLang.classList.add("project-languages");

            const projectFram = document.createElement("div");
            projectFram.classList.add("project-framework");

            const projectApi = document.createElement("div");
            projectApi.classList.add("project-api");

            const projectGallery = document.createElement("div");

            const projectLink = document.createElement("div");
            projectLink.classList.add("project-link");

            // titre du projet
            projectName.innerHTML = element.name;
            projectName.classList.add("project-title");

            // description du projet
            projectDescr.innerHTML = element.description;
            projectDescr.classList.add("project-description");

            // type de projet
            projectCate.innerHTML = element.category;

            // langages de programmation utilisés
            var languages = element.languages;
            languages.forEach(language => {
                var text = document.createTextNode(language);
                if (language == 'HTML5') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-brands", "fa-html5");
                    logo.style.color = "#FFA500";
                    projectLang.appendChild(logo);
                }
                if (language == 'CSS3') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-brands", "fa-css3-alt");
                    logo.style.color = "#2965f1";
                    projectLang.appendChild(logo);
                }
                if (language == 'Javascript') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-brands", "fa-js");
                    logo.style.color = "#f7df1e";
                    projectLang.appendChild(logo);
                }
                if (language == 'C89') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-solid", "fa-c");
                    logo.style.color = "#fff";
                    projectLang.appendChild(logo);
                }
                if (language == 'Java') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-brands", "fa-java");
                    logo.style.color = "#fff";
                    projectLang.appendChild(logo);
                }
                if (language == 'PHP') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-brands", "fa-php");
                    logo.style.color = "#fff";
                    projectLang.appendChild(logo);
                }
            });

            // framework
            const spanFr = document.createElement("span");
            if (element.framework == "") {
            } else {
                spanFr.textContent = "Framework : " + element.framework;
                projectFram.appendChild(spanFr);
            }

            // API
            const spanApi = document.createElement("span");
            if (element.API == "") {
            } else {
                spanApi.textContent = "API : " + element.API;
                projectApi.appendChild(spanApi);
            }


            // image
            var images = element.images;
            images.forEach(image => {
                const projectImg = document.createElement("img");
                projectImg.src = image;
                projectImg.classList.add("project-image");
                projectGallery.appendChild(projectImg);
            });

            // couleur de la div
            switch (element.category) {
                case 'Web':
                    project.classList.toggle("web");
                    break;

                case 'Jeu':
                    project.classList.toggle("jeu");
                    break;

                case 'IHM':
                    project.classList.toggle("ihm");
                    break;

                default:
                    break;
            }

            // GIT
            if (element.git == "") {
            } else {
                const linkGit = document.createElement("a");
                linkGit.href = element.git;
                linkGit.target = "_blank";
                var logo = document.createElement("i");
                logo.classList.add("fa-brands", "fa-github");
                linkGit.appendChild(logo);
                projectLink.appendChild(linkGit);
            }
            if (element.web == "") {
            } else {
                const linkWeb = document.createElement("a");
                linkWeb.href = element.web;
                linkWeb.target = "_blank";
                var logo = document.createElement("i");
                logo.classList.add("fa-brands", "fa-chrome");
                linkWeb.appendChild(logo);
                projectLink.appendChild(linkWeb);

            }
            // projectLink

            // ajout des "enfants"
            project.appendChild(projectName);
            project.appendChild(projectDescr);
            project.appendChild(projectCate);
            project.appendChild(projectLang);
            project.appendChild(projectFram);
            project.appendChild(projectApi);
            project.appendChild(projectGallery);
            project.appendChild(projectLink);
            gridPr.appendChild(project);
        });
    });