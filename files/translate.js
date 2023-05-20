var languageSelect = document.getElementById("language-select");
var selectedLanguage = languageSelect.value;

function changeToSlo() {
    document.getElementById("about").innerHTML = "O meni";
    document.getElementById("kont").innerHTML = "Kontakt";
    document.getElementById("file").innerHTML = "Projekti";
    document.getElementById("about-text").innerHTML = "O meni";
    document.getElementById("cont").innerHTML = "Kontakt";
    document.getElementById("us").innerHTML = "Oj! Sem Jaka, dijak 1. letnika Vegove gimnazije. Trenutno se učim izdelavo spletnih strani, programiranje v JavaScriptu, batchu in C++.";
    document.getElementById("lok").innerHTML = "Tukaj so povezave za moja socialna omrežja.";
    document.getElementById("projects-title").innerHTML = "Projekti";
    document.getElementById("proj").innerHTML = "Tukaj so nekateri moji projekti.";
    document.getElementById("proj1").innerHTML = "Moja osebna spletna stran.";
    document.getElementById("proj2").innerHTML = "Izboljšava spletne strani za naročanje hrane.";
    document.getElementById("proj3").innerHTML = "Spletna stran z mojimi igrami, narejenimi v JavaScriptu.";
    document.getElementById("proj4").innerHTML = "Pretvornik iz YouTuba v MP3, napisan v Pythonu.";
    document.getElementById("proj5").innerHTML = "Preprosta spletna beležka.";
    var img1 = document.getElementById('SloLi');
    var img2 = document.getElementById('EngLi');
    img1.style.visibility = 'hidden';
    img2.style.visibility = 'visible';
}

function changeToEng() {
    document.getElementById("about").innerHTML = "About";
    document.getElementById("kont").innerHTML = "Contact";
    document.getElementById("file").innerHTML = "Projects";
    document.getElementById("about-text").innerHTML = "About me";
    document.getElementById("cont").innerHTML = "Contact";
    document.getElementById("us").innerHTML = "Hi! I'm Jaka. I'm a student of the first year at Vegova high school. I am currently learning web development, JavaScript, batch and C++.";
    document.getElementById("lok").innerHTML = "Here are some of my social media links.";
    document.getElementById("projects-title").innerHTML = "Projects";
    document.getElementById("proj").innerHTML = "Here are some of my projects.";
    document.getElementById("proj1").innerHTML = "My personal website.";
    document.getElementById("proj2").innerHTML = "Food ordering service improvement.";
    document.getElementById("proj3").innerHTML = "Website with my games, made in JavaScript.";
    document.getElementById("proj4").innerHTML = "YouTube to MP3 converter, made in Python.";
    document.getElementById("proj5").innerHTML = "Simple notes taking website.";
    var img1 = document.getElementById('SloLi');
    var img2 = document.getElementById('EngLi');
    img1.style.visibility = 'visible';
    img2.style.visibility = 'hidden';
}

function translatePage(selectedLanguage) {
    if (selectedLanguage === "slo") {
        changeToSlo();
    } else if (selectedLanguage === "eng") {
        changeToEng();
    }
}
