var languageSelect = document.getElementById("language-select");
var selectedLanguage = languageSelect.value;

function changeToSlo() {
    //NavBar
    document.getElementById("home").innerHTML = "Domov";
    document.getElementById("nav-about").innerHTML = "O meni";
    document.getElementById("nav-contact").innerHTML = "Kontakt";
    document.getElementById("nav-skills").innerHTML = "Znanja";
    document.getElementById("nav-projects").innerHTML = "Projekti";

    //Welcome text
    document.getElementById("welcome-text").innerHTML = "Dijak, oblikovalec spletnih strani, računalniški navdušenec";

    //About me
    document.getElementById("about-text").innerHTML = "Sem dijak 2. letnika programa Tehniška gimnazija na Vegovi Ljubljana. V prostem času se ukvarjam s programiranjem in kolesarjenjem.";


    //Timeline
    document.getElementById("13").innerHTML = "Začel hoditi v osnovno šolo";
    document.getElementById("20").innerHTML = "Začel svojo programersko pot";
    document.getElementById("22-1").innerHTML = "Začel hoditi v srednjo šolo";
    document.getElementById("22-2").innerHTML = "Začel aktivno učenje spletnega oblikovanja";
    document.getElementById("now").innerHTML = "Učim se spletnega oblikovanja, JavaScripta, batcha in C++";

    //Skills
    document.getElementById("skills-title").innerHTML = "Znanja";
}

function changeToEng() {
    //NavBar
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("nav-about").innerHTML = "About";
    document.getElementById("nav-contact").innerHTML = "Contact";
    document.getElementById("nav-skills").innerHTML = "Skills";
    document.getElementById("nav-projects").innerHTML = "Projects";

    //Welcome text
    document.getElementById("welcome-text").innerHTML = "Student, web developer, computer enthusiast";

    //About me
    document.getElementById("about-text").innerHTML = "I'm a student of the 2nd year of the Technical Gymnasium program at Vegova Ljubljana. In my free time I like to program and ride my bike.";

    //Timeline
    document.getElementById("13").innerHTML = "Started primary school";
    document.getElementById("20").innerHTML = "Started my coding journey";
    document.getElementById("22-1").innerHTML = "Started high school";
    document.getElementById("22-2").innerHTML = "Started actively learning web development";
    document.getElementById("now").innerHTML = "Learning web development, JavaScript, batch and C++";

    //Skills
    document.getElementById("skills-title").innerHTML = "Skills";
}

function translatePage(selectedLanguage) {
    if (selectedLanguage === "slo") {
        changeToSlo();
    } else if (selectedLanguage === "eng") {
        changeToEng();
    }
}