let n = 1;

// Initialize the slides
for (let i = 2; i <= 10; i++) {
    document.getElementById(i).style.display = "none";
}

function moveSlides(direction) {
    if (direction === "left") {
        n++;
    } else if (direction === "right") {
        n--;
    }

    if (n > 10) {
        n = 1;
        document.getElementById(10).style.animation = "slideOutLeft 0.5s";
        document.getElementById(10).style.display = "none";
    } else if (n < 1) {
        n = 10;
        document.getElementById(1).style.animation = "slideOutRight 0.5s";
        document.getElementById(1).style.display = "none";
    }

    const current = document.getElementById(n);
    const next = direction === "left" ? document.getElementById(n - 1) : document.getElementById(n + 1);

    current.style.animation = `slideIn${direction === "left" ? "Left" : "Right"} 0.5s`;
    current.style.display = "block";

    if (next) {
        next.style.animation = `slideOut${direction === "left" ? "Left" : "Right"} 0.5s`;

        // Transition
        setTimeout(() => {
            next.style.animation = "";
            next.style.display = "none";
            current.style.animation = "";
        }, 500);
    }

    console.log(n);
}