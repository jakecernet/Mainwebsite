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
    document.getElementById("project1-title").innerHTML = "Moja spletna stran";
    document.getElementById("proj1-desc").innerHTML = "To je moja osebna spletna stran, ki jo sem izdelal v HTML-u, CSS-u in JavaScriptu.";
    document.getElementById("project2-title").innerHTML = "KrokyPlus";
    document.getElementById("proj2-desc").innerHTML = "To je aplikacija, ki bo samodejno naročila kosilo za vas.";
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
    document.getElementById("project1-title").innerHTML = "My website";
    document.getElementById("proj1-desc").innerHTML = "This is my personal website. It is made in HTML, CSS and JavaScript.";
    document.getElementById("project2-title").innerHTML = "KrokyPlus";
    document.getElementById("proj2-desc").innerHTML = "This is an app that will automaticly order lunch for you.";
    var img1 = document.getElementById('SloLi');
    var img2 = document.getElementById('EngLi');
    img1.style.visibility = 'visible';
    img2.style.visibility = 'hidden';
}