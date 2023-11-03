const text = document.getElementById('welcome-text').textContent;
const text2 = document.getElementById('text2').textContent;
text3 = document.getElementById('text3').textContent;
document.getElementById('welcome-text').textContent = ''; // Clear the text
document.getElementById('text2').textContent = ''; // Clear the text
document.getElementById('text3').textContent = ''; // Clear the text
let variable = 0;
let variable2 = 0;
let variable3 = 0;

function typeWriter() {
    if (variable < text.length) {
        document.getElementById('welcome-text').textContent += text.charAt(variable);
        variable++;
        setTimeout(typeWriter, 50); // Adjust the typing speed (delay) here
    }
    //when done, set border of text to none
    else {
        document.getElementById('welcome-text').style.border = 'none';
    }
}

function typeWriter2() {
    if (variable2 < text2.length) {
        document.getElementById('text2').textContent += text2.charAt(variable2);
        variable2++;
        setTimeout(typeWriter2, 50); // Adjust the typing speed (delay) here
    }
    //when done, set border of text to none
    else {
        document.getElementById('text2').style.border = 'none';
    }
}

function typeWriter3() {
    if (variable3 < text3.length) {
        document.getElementById('text3').textContent += text3.charAt(variable3);
        variable3++;
        setTimeout(typeWriter3, 60); // Adjust the typing speed (delay) here
    }
    //when done, set border of text to none
    else {
        document.getElementById('text3').style.border = 'none';
    }
}

onload = typeWriter2();
onload = setTimeout(typeWriter3, 500); // Adjust the delay here
onload = setTimeout(typeWriter, 1500); // Adjust the delay here