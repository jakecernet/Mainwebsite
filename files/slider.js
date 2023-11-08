n = 1;

//show only first slide, hide the rest
for (i = 2; i <= 10; i++) {
    document.getElementById(i).style.display = "none";
}

function moveSlidesLeft() {
    n++;

    //if n is more than 4, go back to 1
    if (n > 10) {
        n = 1;
        document.getElementById(n).style.animation = "slideInLeft 0.5s";
        document.getElementById(n).style.display = "block";
        document.getElementById(10).style.display = "none";
        document.getElementById(10).style.animation = "";
    } else if (n < 1) {
        n = 10;
        document.getElementById(n).style.animation = "slideInLeft 0.5s";
        document.getElementById(n).style.display = "block";
        document.getElementById(1).style.display = "none";
        document.getElementById(1).style.animation = "";
    } else {
        document.getElementById(n - 1).style.animation = "slideOutLeft 0.5s";
        document.getElementById(n).style.animation = "slideInLeft 0.5s";

        //transition
        setTimeout(function () {
            document.getElementById(n - 1).style.animation = "";
            document.getElementById(n - 1).style.display = "none";
            document.getElementById(n).style.display = "block";
            document.getElementById(n).style.animation = "";
        }, 500);

        console.log(n);
    }
}

function moveSlidesRight() {
    n--;

    if (n > 10) {
        n = 1;
        document.getElementById(n).style.animation = "slideInRight 0.5s";
        document.getElementById(n).style.display = "block";
        document.getElementById(10).style.display = "none";
        document.getElementById(10).style.animation = "";
    } else if (n < 1) {
        n = 10;
        document.getElementById(n).style.animation = "slideInRight 0.5s";
        document.getElementById(n).style.display = "block";
        document.getElementById(1).style.display = "none";
        document.getElementById(1).style.animation = "";
    } else {
        document.getElementById(n + 1).style.animation = "slideOutRight 0.5s";
        document.getElementById(n).style.animation = "slideInRight 0.5s";

        //transition
        setTimeout(function () {
            document.getElementById(n + 1).style.animation = "";
            document.getElementById(n + 1).style.display = "none";
            document.getElementById(n).style.display = "block";
            document.getElementById(n).style.animation = "";
        }, 500);

        console.log(n);
    }
}