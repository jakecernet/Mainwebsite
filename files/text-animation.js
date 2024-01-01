const text = document.getElementById("welcome-text").textContent;
(text3 = document.getElementById("text3").textContent),
	(document.getElementById("welcome-text").textContent = ""),
	(document.getElementById("text3").textContent = "");
let variable = 0,
	variable3 = 0;
function typeWriter() {
	variable < text.length
		? ((document.getElementById("welcome-text").textContent +=
				text.charAt(variable)),
		  variable++,
		  setTimeout(typeWriter, 50))
		: (document.getElementById("welcome-text").style.border = "none");
}
function typeWriter3() {
	variable3 < text3.length
		? ((document.getElementById("text3").textContent +=
				text3.charAt(variable3)),
		  variable3++,
		  setTimeout(typeWriter3, 60))
		: (document.getElementById("text3").style.border = "none");
}
(onload = typeWriter3()), (onload = setTimeout(typeWriter, 1e3));
