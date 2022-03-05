let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let result = document.querySelector('h3');
let body = document.getElementById('gradient');
let btn_random = document.querySelector('button');

window.onload = function () {
    body.style.background = "linear-gradient(to right, #ffc0cb, #801480)";
    setResult();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    setResult();
}

function setResult() {
    result.textContent = body.style.background + ";";
}

let nova_cor1 = [];
let nova_cor2 = [];

function randomGradient() {
    for(let i = 0; i < 6; i++) {
        let numero = Math.floor(Math.random() * 10);
        nova_cor1 += numero;
    } 
    for (let i = 0; i < 6; i++) {
        let numero = Math.floor(Math.random() * 10);
        nova_cor2 += numero;
    } 
    setRandomGradient();   
}

function setRandomGradient() {
    body.style.background = "linear-gradient(to right, #" + nova_cor1 + ", #" + nova_cor2 + ")";
    color1.value = "#" + nova_cor1;
    color2.value = "#" + nova_cor2;
    nova_cor1 = [];
    nova_cor2 = [];
    result.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn_random.addEventListener("click", randomGradient);