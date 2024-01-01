function showNav() {
	var o = document.querySelector(".nav");
	1 == o.style.opacity
		? ((o.style.opacity = 0), (o.style.pointerEvents = "none"))
		: ((o.style.opacity = 1), (o.style.pointerEvents = "auto"));
}
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
function switchTheme() {
	(switcher = document.querySelector(".switcher")),
		document.body.classList.toggle("dark"),
		document.body.classList.toggle("light"),
		switcher.classList.toggle("fa-moon"),
		switcher.classList.toggle("fa-sun");
}
window.addEventListener("scroll", function () {
	var o =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop,
		t = document.querySelector(".top");
	o > 400 ? (t.style.display = "flex") : (t.style.display = "none");
});
