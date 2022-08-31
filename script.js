function burgerMenu() {
    const navLinks = document.querySelector(".navbar-links");
    const toggleIcon = document.querySelector(".burger-icon");
    if (navLinks.classList.contains("menu-close-mobile")) {
        navLinks.classList.remove("menu-close-mobile");
        navLinks.classList.toggle("menu-open-mobile");
        toggleIcon.src = "./assets/icon/cross.png"

    } else {
        navLinks.classList.remove("menu-open-mobile");
        navLinks.classList.toggle("menu-close-mobile");
        toggleIcon.src = "./assets/icon/burger-icon.png"
    }
}