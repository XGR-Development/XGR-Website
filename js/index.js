const lightTheme = "../css/lightmode.css"
const darkTheme = "../css/darkmode.css";

const darkTwitter = "../static/darkmode/twitter-icon.png";
const darkInsta = "../static/darkmode/instagram-icon.png";
const darkGithub = "../static/darkmode/github-icon.png";

const lightTwitter = "../static/lightmode/twitter-icon.png";
const lightInsta = "../static/lightmode/instagram-icon.png";
const lightGithub = "../static/lightmode/github-icon.png";

const twitterIcon = document.getElementById("t-media-icon");
const instagramIcon = document.getElementById("i-media-icon");
const githubIcon = document.getElementById("g-media-icon");

// Swaps the stylesheet to achieve dark mode.
function switchMode() {
  const theme = document.getElementById("theme");
  const button = document.getElementById("mode-button")

  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);

    twitterIcon.setAttribute("src", darkTwitter);
    instagramIcon.setAttribute("src", darkInsta);
    githubIcon.setAttribute("src", darkGithub);
    
    button.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);

    twitterIcon.setAttribute("src", lightTwitter);
    instagramIcon.setAttribute("src", lightInsta);
    githubIcon.setAttribute("src", lightGithub);
    
    button.innerHTML = "Light Mode ☀️";
  }
}