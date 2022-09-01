var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let img = new Image();

img.onload = function() {
    ctx.drawImage(img, 0, 0, 1215, 717);

    let lineargradient = ctx.createLinearGradient(0, 0, 0, 717);

    lineargradient.addColorStop(0, 'rgb(0, 0, 0, 0)');
    lineargradient.addColorStop(0.9, 'rgb(22, 22, 36)');

    ctx.fillStyle = lineargradient;
    ctx.fillRect(0, 0, 1215, 717);
};

img.src = '/src/Akali_0.jpg'


async function login(id) {
    try {
        location.href = "https://discord.com/api/oauth2/authorize?client_id=749337936050520114&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fhtml%2Fmain&response_type=code&scope=identify%20guilds"
    } catch(e) {
        alert('Something went wrong')
    }

    id.innerHTML = "Se déconnecter";
}

function logout(id) {
    id.innerHTML = "Se connecter";
    id.onclick = login(this)
}