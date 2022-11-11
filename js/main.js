const hamFigure = document.querySelector(".hamburger-figure");
const closeFigure = document.querySelector(".hamburger-close");
const menuNav = document.querySelector(".menu-nav");
const siteMenu = document.querySelector(".site-menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

// animation

hamFigure.addEventListener("click", () => {
    body.style.overflowY = "hidden";

    hamFigure.classList.add("hidden");
    overlay.classList.remove("hidden");
    closeFigure.classList.remove("hidden");
    siteMenu.classList.add("show-on");

    document.querySelectorAll(".site-menu__link").forEach(i => {
        i.classList.add("show-on-link")
    });

    document.querySelectorAll(".site-menu__item").forEach(i => {
        i.classList.add("show-on-item")
    });    
});

closeFigure.addEventListener("click", () => {
    body.style.overflowY = "auto";

    hamFigure.classList.remove("hidden");
    overlay.classList.add("hidden");    
    closeFigure.classList.add("hidden");
    siteMenu.classList.remove("show-on");

    document.querySelectorAll(".site-menu__link").forEach(i => {
        i.classList.remove("show-on-link")
    });

    document.querySelectorAll(".site-menu__item").forEach(i => {
        i.classList.remove("show-on-item")
    });
});

