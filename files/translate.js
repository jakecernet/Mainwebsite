var languageSelect = document.getElementById("language-select");
var selectedLanguage = languageSelect.value;

function changeToSlo() {
    //NavBar
    document.getElementById("nav-about").innerHTML = "O meni";
    document.getElementById("nav-contact").innerHTML = "Kontakt";
    document.getElementById("nav-skills").innerHTML = "Znanja";
    document.getElementById("nav-projects").innerHTML = "Projekti";
    document.getElementById("nav-friends").innerHTML = "Prijatelji";

    //Welcome text
    document.getElementById("welcome-text").innerHTML = "Dijak, oblikovalec spletnih strani, računalniški navdušenec";

    //About me
    document.getElementById("about-text").innerHTML = "Sem dijak 2. letnika programa Tehniška gimnazija na Vegovi Ljubljana. Tam obiskujem tudi krožek Vegovacraft, kjer se učimo o elektrotehniki in programiranju.";
    document.getElementById("about-text2").innerHTML = "Poleg šole me zanima predvsem programiranje, še posebej izdelava spletnih strani. Leta 2019 sem prvič izvedel, kako delujejo spletne strani. Navdušen sem bil nad idejo, da lahko ustvarim nekaj, kar lahko dostopa kdorkoli na svetu. Zato sem se leta 2020 začel učiti izdelavo spletnih strani in od takrat nisem prenehal. Trenutno se učim ReactJS, NodeJS in napredno programiranja Arduina.";
    document.getElementById("about-text3").innerHTML = "Ko nisem izgubljen v programiranju ali učenju matematike, fizike in nemščine, verjetno igram Minecraft ali gledam YouTube. Če je vreme lepo, pa me boste našli zunaj, kjer se vozim s svojim kolesom ali snemam z dronom.";

    //Skills
    document.getElementById("skills-title").innerHTML = "Znanja";
    document.getElementById("windows").innerHTML = "Popravljanje naključnih Windows napak";

    //Projects
    document.getElementById("projects-title").innerHTML = "Projekti";
}

function changeToEng() {
    //NavBar
    document.getElementById("nav-about").innerHTML = "About";
    document.getElementById("nav-contact").innerHTML = "Contact";
    document.getElementById("nav-skills").innerHTML = "Skills";
    document.getElementById("nav-projects").innerHTML = "Projects";
    document.getElementById("nav-friends").innerHTML = "Friends";

    //Welcome text
    document.getElementById("welcome-text").innerHTML = "Student, frontend dev, computer enthusiast";

    //About me
    document.getElementById("about-text").innerHTML = "I'm a second-year student pursuing my education in the Technical Gymnasium program at Vegova Ljubljana. I am also a member of the Vegovacraft club, where we learn about electronics and programming.";
    document.getElementById("about-text2").innerHTML = "Beyond the classroom, my passion lies in the realm of programming, especially web development. In 2019, I first found out about web sites and how they work.I was fascinated by the idea of creating something that can be accessed by anyone in the world.So I started learning web development in 2020 and I've been hooked ever since. I'm currently learning ReactJS, NodeJS and advanced Arduino programming."
    document.getElementById("about-text3").innerHTML = "When I'm not lost in programming or studying mathemathics, physics and german, I'm probably playing Minecraft or watching YouTube.If the weather is nice, you'll spot me outdoors, riding my trusty bike or filming with my drone.";

    //Skills
    document.getElementById("skills-title").innerHTML = "Skills";
    document.getElementById("windows").innerHTML = "Fixing random Windows errors";

    //Projects
    document.getElementById("projects-title").innerHTML = "Projects";
}

function translatePage(selectedLanguage) {
    if (selectedLanguage === "slo") {
        changeToSlo();
    } else if (selectedLanguage === "eng") {
        changeToEng();
    }
}