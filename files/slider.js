let n = 1;

for (let i = 1; i < 11; i++) {
    const slide = document.getElementById(i);
    slide.style.opacity = "0";
    slide.style.display = "none";
}

document.getElementById("1").style.display = "block";
document.getElementById("1").style.opacity = "1";

function moveSlides(direction) {
    const previousN = n;

    if (direction === "left") {
        n = (n % 10) + 1;
    } else {
        n = (n - 2 + 10) % 10 + 1;
    }

    const currentSlide = document.getElementById(n);
    const previousSlide = document.getElementById(previousN);

    if (previousSlide) {
        previousSlide.style.animation = "disappear 0.5s ease-in-out forwards";
        previousSlide.style.opacity = "0";
        previousSlide.style.zIndex = "0";
        previousSlide.style.display = "none";
    }

    currentSlide.style.animation = "appear 0.5s ease-in-out forwards"
    currentSlide.style.display = "block";
    currentSlide.style.opacity = "1";
    currentSlide.style.zIndex = "100";

    // If going back to the first slide, hide the last slide
    if (n === 1 && direction === "left") {
        const lastSlide = document.getElementById(10);
        if (lastSlide) {
            lastSlide.style.opacity = "0";
            lastSlide.style.zIndex = "0";
            lastSlide.style.display = "none";
        }
    }
}
