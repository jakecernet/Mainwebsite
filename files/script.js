var menu = document.getElementById("navbar-link");

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}
);

function menuShow() {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}