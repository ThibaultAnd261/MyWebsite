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

let theme = 0; // 0 = nuit, 1 = jour
// changement de thème (nuit/jour)
function websiteTheme() {
    const themeIcon = document.querySelector('.light-icon');
    console.log(themeIcon);
    // console.log(theme);
    if (theme == 0) {
        document.documentElement.style.setProperty('--yellow-color', '#333652');
        document.documentElement.style.setProperty('--blue-color', '#FAD02C');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        theme++;
    } else {
        document.documentElement.style.setProperty('--yellow-color', '#FAD02C');
        document.documentElement.style.setProperty('--blue-color', '#333652');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        theme--;
    }
}