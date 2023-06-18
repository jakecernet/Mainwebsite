var languageSelect = document.getElementById("language-select");
var selectedLanguage = languageSelect.value;

function changeToSlo() {
    document.getElementById("about").innerHTML = "O meni";
    document.getElementById("kont").innerHTML = "Povezave";
    document.getElementById("file").innerHTML = "Projekti";
    document.getElementById("cont").innerHTML = "Povezave";
    document.getElementById("contact").innerHTML = "Kontakt";
    document.getElementById("us").innerHTML = "Oj! Sem Jaka Černetič.";
    document.getElementById("us-h2").innerHTML = "Sem dijak prvega letnika Vegove gimnazije. Trenutno se učim izdelavo spletnih strani, JavaScript, batch in C++.";
    document.getElementById("lok").innerHTML = "Tukaj so povezave za moja socialna omrežja.";
    document.getElementById("projects-title").innerHTML = "Projekti";
    document.getElementById("proj").innerHTML = "Tukaj so nekateri moji projekti.";
    document.getElementById("proj1").innerHTML = "Moja osebna spletna stran.";
    document.getElementById("proj2").innerHTML = "Izboljšava spletne strani za naročanje hrane.";
    document.getElementById("proj3").innerHTML = "Spletna stran z mojimi igrami, narejenimi v JavaScriptu.";
    document.getElementById("proj4").innerHTML = "Pretvornik iz YouTuba v MP3, napisan v Pythonu.";
    document.getElementById("proj5").innerHTML = "Preprosta spletna beležka.";
    document.getElementById("proj6").innerHTML = "Spletna stran za naš razred.";
    document.getElementById("cont-me").innerHTML = "Kontakt";
    document.getElementById("cont-me-h2").innerHTML = "Če me želite kontaktirati, lahko to storite tukaj.";
    document.getElementById("timeline").innerHTML = "Časovnica";
    document.getElementById("timeline-h2").innerHTML = "Tukaj je časovnica mojih dogodkov.";
    document.getElementById("13").innerHTML = "Začel osnovno šolo.";
    document.getElementById("20").innerHTML = "Začel svoje programersko potovanje.";
    document.getElementById("22-1").innerHTML = "Začel srednjo šolo.";
    document.getElementById("22-2").innerHTML = "Začel se aktivno učiti izdelave spletnih strani.";
    document.getElementById("now").innerHTML = "Učenje izdelave spletnih strani, JavaScripta, batcha in C++.";
}

function changeToEng() {
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("kont").innerHTML = "Links";
    document.getElementById("file").innerHTML = "Projects";
    document.getElementById("cont").innerHTML = "Links";
    document.getElementById("contact").innerHTML = "Contact me";
    document.getElementById("us").innerHTML = "Hi! I'm Jaka Černetič.";
    document.getElementById("us-h2").innerHTML = "I'm a student in the first grade at Vegova high school. I am currently learning web development, JavaScript, batch and C++.";
    document.getElementById("lok").innerHTML = "Here are some of my social media links.";
    document.getElementById("projects-title").innerHTML = "Projects";
    document.getElementById("proj").innerHTML = "Here are some of my projects.";
    document.getElementById("proj1").innerHTML = "My personal website.";
    document.getElementById("proj2").innerHTML = "Food ordering service improvement.";
    document.getElementById("proj3").innerHTML = "Website with my games, made in JavaScript.";
    document.getElementById("proj4").innerHTML = "YouTube to MP3 converter, made in Python.";
    document.getElementById("proj5").innerHTML = "Simple notes taking website.";
    document.getElementById("proj6").innerHTML = "A website for our class.";
    document.getElementById("cont-me").innerHTML = "Contact me";
    document.getElementById("cont-me-h2").innerHTML = "If you want to contact me, you can do it here.";
    document.getElementById("timeline").innerHTML = "Timeline";
    document.getElementById("timeline-h2").innerHTML = "Here is a timeline of my events.";
    document.getElementById("13").innerHTML = "Started primary school.";
    document.getElementById("20").innerHTML = "Started my coding journey.";
    document.getElementById("22-1").innerHTML = "Started high school.";
    document.getElementById("22-2").innerHTML = "Started actively learning web development.";
    document.getElementById("now").innerHTML = "Learning web development, JavaScript, batch and C++.";
}

function translatePage(selectedLanguage) {
    if (selectedLanguage === "slo") {
        changeToSlo();
    } else if (selectedLanguage === "eng") {
        changeToEng();
    }
}
