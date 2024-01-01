var languageSelect = document.getElementById("language-select"),
	selectedLanguage = languageSelect.value;

function translatePage(e) {
	"slo" === e ? changeToSlo() : "eng" === e && changeToEng();
}
