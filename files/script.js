var menu = document.getElementById("navbar-link");

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}
);

function menuShow() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

function jakecer() {
    window.open("https://jakecer.tk", "_blank");
}

function kroky() {
    window.open("https://krokyplus.me", "_blank");
}

function jsgames() {
    window.open("https://jsgames.tech", "_blank");
}

function download() {
    window.open("https://github.com/jakecernet/YT_Downloader", "_blank")
}

function notes() {
    window.open("https://jakecernet.github.io/Notes/", "_blank")
}