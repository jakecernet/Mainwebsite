function changeToSlo(){
    document.getElementById("about").innerHTML = "O meni";
    document.getElementById("kont").innerHTML = "Kontakt";
    document.getElementById("file").innerHTML = "Datoteke";
    document.getElementById("about-text").innerHTML = "O meni";
    document.getElementById("cont").innerHTML = "Kontakt";
    document.getElementById("us").innerHTML = "Oj! Sem Jaka, dijak 1. letnika Vegove gimnazije. Trenutno se učim izdelavo spletnih strani, programiranje v JavaScriptu in C++.";
    document.getElementById("lok").innerHTML = "Tukaj so povezave za moja socialna omrežja.";
    var img1 = document.getElementById('SloLi');
    var img2 = document.getElementById('EngLi');
    img1.style.visibility = 'hidden';
    img2.style.visibility = 'visible';  
}

function changeToEng(){
    document.getElementById("about").innerHTML = "About";
    document.getElementById("kont").innerHTML = "Contact";
    document.getElementById("file").innerHTML = "Files";
    document.getElementById("about-text").innerHTML = "About me";
    document.getElementById("cont").innerHTML = "Contact";
    document.getElementById("us").innerHTML = "Hi! I'm Jaka. I'm a student of the first year at Vegova high school. I am currently learning web development, JavaScript and C++.";
    document.getElementById("lok").innerHTML = "Here are some of my social media links.";
    var img1 = document.getElementById('SloLi');
    var img2 = document.getElementById('EngLi');
    img1.style.visibility = 'visible';
    img2.style.visibility = 'hidden';
}