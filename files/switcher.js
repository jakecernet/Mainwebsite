function switchTheme() {
    switcher = document.querySelector('.switcher');
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    switcher.classList.toggle('fa-moon');
    switcher.classList.toggle('fa-sun');
}