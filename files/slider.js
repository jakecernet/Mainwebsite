n = 1;

//show only first slide, hide the rest
for (i = 2; i <= 5; i++) {
    document.getElementById(i).style.display = "none";
}

function moveSlidesLeft() {
    n++;
    document.getElementById(n - 1).style.animation = "slideOut 1s";
    document.getElementById(n).style.animation = "slideIn 1s";

    //transition
    setTimeout(function () {
        document.getElementById(n - 1).style.animation = "";
        document.getElementById(n - 1).style.display = "none";
        document.getElementById(n).style.display = "block";
        document.getElementById(n).style.animation = "";
    }, 1000);

    console.log(n);

    //if n is 5, then hide right arrow
    if (n == 5) {
        document.querySelector(".right-arrow").style.display = "none";
    }

    //if n is not 5, then show right arrow
    if (n != 5) {
        document.querySelector(".right-arrow").style.display = "flex";
    }
}

function moveSlidesRight() {
    n--;
    document.getElementById(n + 1).animation = "slideOut 1s";
    document.getElementById(n).style.animation = "slideIn 1s";

    //transition
    setTimeout(function () {
        document.getElementById(n + 1).style.animation = "";
        document.getElementById(n + 1).style.display = "none";
        document.getElementById(n).style.display = "block";
        document.getElementById(n).style.animation = "";
    }, 1000);

    console.log(n);

    //if n is 1, then hide left arrow
    if (n == 1) {
        document.querySelector(".left-arrow").style.display = "none";
    }

    //if n is not 1, then show left arrow
    if (n != 1) {
        document.querySelector(".left-arrow").style.display = "flex";
    }
}