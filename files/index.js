window.addEventListener('scroll', function () {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    var scrollToTop = document.querySelector('.top');
    if (scrollPos > 400) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
});

function showNav() {
    var nav = document.querySelector('.nav');
    if (nav.style.opacity == 1) {
        nav.style.opacity = 0;
        nav.style.pointerEvents = 'none';
    } else {
        nav.style.opacity = 1;
        nav.style.pointerEvents = 'auto';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}