var menu = document.getElementById("mobile-nav");
var title = document.getElementById("about-text");

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
        setTimeout(function () {
            menu.style.width = "100%";
        }
            , 30);
    }
    else {
        menu.style.width = "0";
        setTimeout(function () {
            menu.style.display = "none";
        }
            , 300);
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

function spaces() {
    window.open("https://spaces.tk", "_blank")
}

window.addEventListener('scroll', function () {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    var scrollToTop = document.querySelector('.top');
    if (scrollPos > 400) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});