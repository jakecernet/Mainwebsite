const text = document.getElementById('welcome-text').textContent;
document.getElementById('welcome-text').textContent = ''; // Clear the text
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('welcome-text').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Adjust the typing speed (delay) here
    } 
    //when done, set border of text to none
    else {
        document.getElementById('welcome-text').style.border = 'none';
    }
}

typeWriter(); // Start the typewriter effect when the page loads