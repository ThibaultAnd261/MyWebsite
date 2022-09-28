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
        let gridPr = document.querySelector('.projects-grid');
        // console.log(data);
        // console.log(namePr);
        data.forEach((element, index) => {
            const project = document.createElement("div");
            project.classList.add("project");

            const projectHeader = document.createElement("div");
            projectHeader.classList.add("project-header");
            projectHeader.setAttribute("onclick", "statutDiv(" + index + ")");

            const projectName = document.createElement("h3");

            const projectDivStatus = document.createElement("span");

            const projectContent = document.createElement("div");
            projectContent.classList.add("project-content");

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
            projectGallery.classList.add("project-gallery");

            const projectLink = document.createElement("div");
            projectLink.classList.add("project-link");

            // titre du projet
            projectName.innerHTML = element.name;
            projectName.classList.add("project-title");

            projectHeader.appendChild(projectName)

            // span 'Réduire'/'Afficher'
            projectDivStatus.innerHTML = "(Réduire)"
            projectDivStatus.classList.add("project-statut");
            projectHeader.appendChild(projectDivStatus)

            // description du projet
            projectDescr.innerHTML = element.description;
            projectDescr.classList.add("project-description");

            projectContent.appendChild(projectDescr);

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
                    projectLang.appendChild(logo);
                }
                if (language == 'Sql') {
                    var logo = document.createElement("i");
                    logo.classList.add("fa-solid", "fa-database");
                    logo.style.color = "#00758F";
                    projectLang.appendChild(logo);
                }
            });
            projectContent.appendChild(projectLang);

            // framework
            const spanFr = document.createElement("span");
            if (element.framework == "") {
            } else {
                spanFr.textContent = "Framework : " + element.framework;
                projectFram.appendChild(spanFr);
            }
            projectContent.appendChild(projectFram);

            // API
            const spanApi = document.createElement("span");
            if (element.API == "") {
            } else {
                spanApi.textContent = "API : " + element.API;
                projectApi.appendChild(spanApi);
            }
            projectContent.appendChild(projectApi);

            var images = element.images;

            const imgFirst = document.createElement("div");
            imgFirst.classList.add("project-imageFirst");

            const imgCaption = document.createElement("div");
            imgCaption.classList.add("project-imageCaption");
            imgCaption.textContent = element.caption[0]

            const imgs = document.createElement("div");
            imgs.classList.add("project-images");

            images.forEach((image, i) => {
                const projectImg = document.createElement("img");
                // console.log(images);
                if (i == 0) {
                    projectImg.src = image;
                    projectImg.alt = element.caption[i];
                    projectImg.classList.add("project-image", "active-img");
                    imgFirst.appendChild(projectImg);
                    projectGallery.appendChild(imgFirst);
                } else {
                    projectImg.src = image;
                    projectImg.alt = element.caption[i];
                    projectImg.classList.add("project-image");
                    projectImg.setAttribute("onclick", "swapImg(" + i + "," + index + ")");
                    imgs.appendChild(projectImg);
                    projectGallery.appendChild(imgs);
                }
            });


            projectGallery.appendChild(imgFirst);
            projectGallery.appendChild(imgCaption);
            projectGallery.appendChild(imgs);

            projectContent.appendChild(projectGallery);

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
            projectContent.appendChild(projectLink);

            // ajout des "enfants"
            project.appendChild(projectHeader);
            project.appendChild(projectContent);
            gridPr.appendChild(project);
        });
        console.log(gridPr.childElementCount);
        tableauInit(gridPr.childElementCount);
    });

// onclick
function swapImg(indexImg, indexProj) {
    fetch("projects.json")
        .then(res => res.json())
        .then(data => {
            // images dynamiques
            const imgDivPrincipal = document.querySelectorAll(".project-imageFirst .active-img"); // div de la première image
            const imgsDiv = document.querySelectorAll(".project-images"); // div des sous images
            const imgsChild = imgsDiv[indexProj].querySelectorAll(".project-image"); // pointe un enfant spécifique de imgsDiv

            indexImg = indexImg - 1; // pour que les sous images commencent à 0 et non 1 (pb index envoyé depuis le premier fetch)
            const imgPrincipalSrc = imgDivPrincipal[indexProj].src; // sauvegarde de la première image principale (celle dès le "load")
            imgDivPrincipal[indexProj].src = imgsChild[indexImg].src; // transmission de la première sous image vers l'image principale
            imgsChild[indexImg].src = imgPrincipalSrc; // transmission de la première image SAUVEGARDE vers une des sous images

            // caption dynamique

            const imgPrincipalAlt = imgDivPrincipal[indexProj].alt;
            imgDivPrincipal[indexProj].alt = imgsChild[indexImg].alt;
            imgsChild[indexImg].alt = imgPrincipalAlt;
            const captionDiv = document.querySelectorAll(".project-imageCaption");
            captionDiv[indexProj].textContent = imgDivPrincipal[indexProj].alt;
        });
}

// initialisation du tableau pour changer le statut d'une div (afficher/cacher)
let tab = [];
function tableauInit(tabSize) {
    for (var i = 0; i < tabSize; i++) {
        tab[i] = 0;
    }
    console.log(tab);
}

function statutDiv(indexProj) {
    const projCont = document.querySelectorAll(".project-content");
    const projStat = document.querySelectorAll(".project-statut");
    console.log(projCont);
    if (tab[indexProj] == 0) { // 0 = afficher != 1 = réduire
        tab[indexProj]++;
        projCont[indexProj].style.display = "none";
        projStat[indexProj].textContent = "(Afficher)";
    } else {
        tab[indexProj]--;
        projCont[indexProj].style.display = "block";
        projStat[indexProj].textContent = "(Réduire)";
    }
    console.log(tab);
}

var filterInt = 0;
const projTop = document.querySelector(".projects-top");

function sortProject(typeProj) {
    const webCollection = document.getElementsByClassName("project web");
    const gameCollection = document.getElementsByClassName("project jeu");
    const ihmCollection = document.getElementsByClassName("project ihm");


    switch (typeProj) {
        case "web":
            for (let i = 0; i < webCollection.length; i++) {
                if (webCollection[i].style.display = "none") {
                    webCollection[i].style.display = "block";
                }
            }
            for (let i = 0; i < gameCollection.length; i++) {
                gameCollection[i].style.display = "none";
            }
            for (let i = 0; i < ihmCollection.length; i++) {
                ihmCollection[i].style.display = "none";
            }

            filterInt = 1;

            break;

        case "jeu":
            for (let i = 0; i < gameCollection.length; i++) {
                if (gameCollection[i].style.display = "none") {
                    gameCollection[i].style.display = "block";
                }
            }
            for (let i = 0; i < webCollection.length; i++) {
                webCollection[i].style.display = "none";
            }
            for (let i = 0; i < ihmCollection.length; i++) {
                ihmCollection[i].style.display = "none";
            }

            filterInt = 1;

            break;

        case "ihm":
            for (let i = 0; i < ihmCollection.length; i++) {
                if (ihmCollection[i].style.display = "none") {
                    ihmCollection[i].style.display = "block";
                }
            }
            for (let i = 0; i < webCollection.length; i++) {
                webCollection[i].style.display = "none";
            }
            for (let i = 0; i < gameCollection.length; i++) {
                gameCollection[i].style.display = "none";
            }

            filterInt = 1;

            break;

        default:
            break;
    }

    const btnReset = document.createElement("button");
    btnReset.textContent = "Réinitialiser les filtres";
    btnReset.setAttribute("onclick", "resetFilter()");
    btnReset.classList.add("projects-btnReset");

    // const projTop = document.querySelector(".projects-top");

    let btnElmt = document.querySelector(".projects-btnReset");
    if (filterInt == 1 && !(projTop.contains(btnElmt))) {
        projTop.appendChild(btnReset);
    }
}

function resetFilter() {
    filterInt == 0;
    var btnReset = document.querySelector(".projects-btnReset")
    projTop.removeChild(btnReset);

    const projCollection = document.getElementsByClassName("project");
    for (let i = 0; i < projCollection.length; i++) {
        if (projCollection[i].style.display = "none") {
            projCollection[i].style.display = "block";
        }
    }
}