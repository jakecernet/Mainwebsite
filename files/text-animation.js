const text = document.getElementById('welcome-text').textContent;
document.getElementById('welcome-text').textContent = ''; // Clear the text
let variable = 0;

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

typeWriter(); // Start the typewriter effect when the page loads