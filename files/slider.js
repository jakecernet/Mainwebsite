let n = 1;

for (let i = 1; i <= 10; i++) {
    document.getElementById(i).style.display = "none";
}

// Initialize the slides (show only the first two slides)
document.getElementById(1).style.opacity = "1";
document.getElementById(1).style.display = "block";
document.getElementById(1).style.transform = "translateX(0%)";
document.getElementById(2).style.opacity = "0.5";
document.getElementById(2).style.display = "block";
document.getElementById(2).style.transform = "translateX(20%)";
document.getElementById(10).style.opacity = "0.5";
document.getElementById(10).style.display = "block";
document.getElementById(10).style.transform = "translateX(-20%)";

function moveSlides(direction) {
    n--;

    let left = n;
    let right = n + 2;

    if (direction == "left") {
        document.getElementById(2).style.transform = "translateX(0%)";
        if (left < 1){
            left = 9;
            right = 1;
        }
        if (right > 10) right = 1;

        let leftElement = document.getElementById(left);
        let rightElement = document.getElementById(right + 1);

        if (leftElement) {
            leftElement.style.animation = "disappearLeft 1s";
            leftElement.style.display = "none";
            console.log("previous left slide disappeared");
        }

        document.getElementById(right).style.display = "block";
        document.getElementById(right).style.animation = "slideInLeft 1s";
        document.getElementById(right).style.opacity = "1";
        document.getElementById(right).style.transform = "translateX(0%)";
        console.log("previous right slide is now the current slide");

        if (rightElement) {
            rightElement.style.display = "block";
            rightElement.style.animation = "appearRight 1s";
            rightElement.style.opacity = "0.5";
            rightElement.style.transform = "translateX(20%)";
            console.log("next right slide appeared");
        }

        //lower the opacity of the previous current slide
        document.getElementById(n + 1).style.animation = "slideOutLeft 1s";
        document.getElementById(n + 1).style.opacity = "0.5";
        document.getElementById(n + 1).style.transform = "translateX(-20%)";
        console.log("previous current slide is now the left slide");

        n = right;
    } else if (direction == "right") {
        if (left < 1) left = 10;
        if (right > 10) right = 1;

        let leftElement = document.getElementById(left - 1);
        let rightElement = document.getElementById(right);

        if (leftElement) {
            leftElement.style.display = "block";
            leftElement.style.animation = "appearLeft 1s";
            leftElement.style.opacity = "0.5";
            console.log("next left slide appeared");
        }

        if (rightElement) {
            rightElement.style.animation = "disappearRight 1s";
            rightElement.style.display = "none";
            console.log("previous right slide disappeared");
        }

        document.getElementById(left).style.display = "block";
        document.getElementById(left).style.animation = "slideInLeft 1s";
        document.getElementById(left).style.opacity = "1";
        console.log("previous left slide is now the current slide");

        n = left;
    }

    if (n < 1) n = 10;
    if (n > 10) n = 1;
}
