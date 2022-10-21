//------------------------------ Switch Mode -------------------------------

const lightTheme = "/css/lightmode.css"
const darkTheme = "/css/darkmode.css";

const darkX = "/src/xgr-dark.png";
const darkLogo = "/src/xgr-logo-white-transparent.png"

const lightX = "/src/xgr-light.png";
const lightLogo = "/src/xgr-logo-black-transparent.png"

const headerLogo = document.getElementById("header-logo");
const footerLogo = document.getElementById("footer-logo");

// Swaps the stylesheet to achieve dark mode.
function switchMode() {
  const theme = document.getElementById("theme");
  const button = document.getElementById("mode-button")

  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);

    headerLogo.setAttribute("src", darkX);
    footerLogo.setAttribute("src", darkLogo);
  } else {
    theme.setAttribute("href", lightTheme);

    headerLogo.setAttribute("src", lightX);
    footerLogo.setAttribute("src", lightLogo);
  }
}

let header = document.querySelector('header')
let toggle = document.querySelector('.menu-toggle')
let navigation = document.querySelector(".header-navigation")

toggle.onclick =  function(){
  header.classList.toggle('open');
}