var menu = document.getElementById("navbar-link");
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
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos || prevScrollpos == currentScrollPos) {
                document.getElementById("navbar-link").style.display = "none";
            } else {
                document.getElementById("navbar-link").style.display = "none";
            }
            prevScrollpos = currentScrollPos;
        }
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

//hide the navbar buttons when scrolling or clicking
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || prevScrollpos == currentScrollPos) {
        document.getElementById("navbar-link").style.display = "block";
    } else {
        document.getElementById("navbar-link").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
}