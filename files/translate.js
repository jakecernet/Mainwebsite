var languageSelect = document.getElementById("language-select"),
	selectedLanguage = languageSelect.value;
function changeToSlo() {
	(document.getElementById("nav-about").innerHTML = "O meni"),
		(document.getElementById("nav-contact").innerHTML = "Kontakt"),
		(document.getElementById("nav-skills").innerHTML = "Znanja"),
		(document.getElementById("nav-projects").innerHTML = "Projekti"),
		(document.getElementById("nav-friends").innerHTML = "Prijatelji"),
		(document.getElementById("welcome-text").innerHTML =
			"Dijak, oblikovalec spletnih strani, računalniški navdušenec"),
		(document.getElementById("about-text").innerHTML =
			"Sem dijak 2. letnika programa Tehniška gimnazija na Vegovi Ljubljana. Tam obiskujem tudi krožek Vegovacraft, kjer se učimo o elektrotehniki in programiranju."),
		(document.getElementById("about-text2").innerHTML =
			"Poleg šole me zanima predvsem programiranje, še posebej izdelava spletnih strani. Leta 2019 sem prvič izvedel, kako delujejo spletne strani. Nad tem sem bil zelo navdušen, zato sem se začel učiti izdelavo spletnih strani in od takrat nisem prenehal. Trenutno se učim ReactJS, NodeJS in napredno programiranja Arduina."),
		(document.getElementById("skills-title").innerHTML = "Znanja"),
		(document.getElementById("windows").innerHTML =
			"Popravljanje naključnih Windows napak"),
		(document.getElementById("drone").innerHTML =
			"A1/A3 upravljalec drona"),
		(document.getElementById("projects-title").innerHTML = "Projekti");
}
function changeToEng() {
	(document.getElementById("nav-about").innerHTML = "About"),
		(document.getElementById("nav-contact").innerHTML = "Contact"),
		(document.getElementById("nav-skills").innerHTML = "Skills"),
		(document.getElementById("nav-projects").innerHTML = "Projects"),
		(document.getElementById("nav-friends").innerHTML = "Friends"),
		(document.getElementById("welcome-text").innerHTML =
			"Student, frontend dev, computer enthusiast"),
		(document.getElementById("about-text").innerHTML =
			"I'm a second-year student pursuing my education in the Technical Gymnasium program at Vegova Ljubljana. I am also a member of the Vegovacraft club, where we learn about electronics and programming."),
		(document.getElementById("about-text2").innerHTML =
			"Outside the classroom, my passion lies in the realm of programming, especially web development. In 2019, I first found out about web sites and how they work. I liked it, so I started learning web development and I've been hooked ever since. I'm currently learning ReactJS, NodeJS and advanced Arduino programming."),
		(document.getElementById("skills-title").innerHTML = "Skills"),
		(document.getElementById("windows").innerHTML =
			"Fixing random Windows errors"),
		(document.getElementById("drone").innerHTML = "A1/A3 drone pilot"),
		(document.getElementById("projects-title").innerHTML = "Projects");
}
function translatePage(e) {
	"slo" === e ? changeToSlo() : "eng" === e && changeToEng();
}
