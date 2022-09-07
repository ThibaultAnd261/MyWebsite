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

fetch("projects.json").then(res => res.json()).then(data => {
    console.log(data);
});