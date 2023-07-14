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

// Get the divs
const timelineDiv = document.querySelector('.timeline');
const skillsDiv = document.querySelector('.skills');
const linksDiv = document.querySelector('.links');
const projectDiv = document.querySelector('.project');
const formDiv = document.querySelector('.form');

// Get the height of the viewport
const viewportHeight = window.innerHeight;

// Handle the scroll event
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the opacity for each div based on its position relative to the viewport
    const timelineOpacity = calculateOpacity(timelineDiv.offsetTop, viewportHeight, scrollPosition);
    const skillsOpacity = calculateOpacity(skillsDiv.offsetTop, viewportHeight, scrollPosition);
    const linksOpacity = calculateOpacity(linksDiv.offsetTop, viewportHeight, scrollPosition);
    const projectOpacity = calculateOpacity(projectDiv.offsetTop, viewportHeight, scrollPosition);
    const formOpacity = calculateOpacity(formDiv.offsetTop, viewportHeight, scrollPosition);

    // Apply the opacity to each div
    timelineDiv.style.opacity = timelineOpacity;
    skillsDiv.style.opacity = skillsOpacity;
    linksDiv.style.opacity = linksOpacity;
    projectDiv.style.opacity = projectOpacity;
    formDiv.style.opacity = formOpacity;

    // Apply a blur filter to each div based on its opacity
    timelineDiv.style.filter = `blur(${timelineOpacity * -8}px)`;
    skillsDiv.style.filter = `blur(${skillsOpacity * -8}px)`;
    linksDiv.style.filter = `blur(${linksOpacity * -8}px)`;
    projectDiv.style.filter = `blur(${projectOpacity * -8}px)`;
    formDiv.style.filter = `blur(${formOpacity * -8}px)`;

    //set the opacity to 1 if the screen width is less than 768px
    if (window.innerWidth < 768) {
        timelineDiv.style.opacity = 1;
        skillsDiv.style.opacity = 1;
        linksDiv.style.opacity = 1;
        projectDiv.style.opacity = 1;
        formDiv.style.opacity = 1;
    }
});

// Function to calculate the opacity based on the div's position
function calculateOpacity(divOffsetTop, viewportHeight, scrollPosition) {
    const topInView = scrollPosition + viewportHeight * 0.2;
    const bottomInView = scrollPosition + viewportHeight * 0.8;

    if (divOffsetTop > bottomInView || divOffsetTop + viewportHeight < topInView) {
        return 0; // Div is outside the viewport
    }

    const opacity = (bottomInView - divOffsetTop) / (viewportHeight * 0.6);
    return Math.min(Math.max(opacity, 0), 1); // Limit the opacity between 0 and 1
}

function load() {
    var load = document.getElementById("loading");
    load.style.display = "none";
}

function switchTheme() {
    const body = document.body;
    const theme = localStorage.getItem("theme");
    const switcher = document.getElementById("switch");
    body.classList.add(theme);
    if (theme == "dark") {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
        switcher.classList.remove("fa-sun");
        switcher.classList.add("fa-moon");
        localStorage.setItem("switch", "fa-moon");
    }
    else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        switcher.classList.remove("fa-moon");
        switcher.classList.add("fa-sun");
        localStorage.setItem("switch", "fa-sun");
    }
}

function checkTheme() {
    const body = document.body;
    const theme = localStorage.getItem("theme");
    body.classList.remove("light");
    body.classList.remove("dark");
    body.classList.add(theme);
    const switcher = document.getElementById("switch");
    if (theme == "dark") {
        switcher.classList.remove("fa-moon");
        switcher.classList.add("fa-sun");
    }
    else {
        switcher.classList.remove("fa-sun");
        switcher.classList.add("fa-moon");
    }
}

checkTheme();