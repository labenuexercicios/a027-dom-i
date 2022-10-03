const frutas = ["laranja", "limão", "uva"];
const listaFrutas = document.getElementById`lista-de-frutas`;

const fruta1 = document.getElementById("Fruta 1");

const fruta2 = document.getElementById("Fruta 2");

const fruta3 = document.getElementById("Fruta 3");

const fruta4 = document.getElementById("fruta-4");

for (let i = 0; i <= frutas.length; i++) {
    document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i]
}

const textFruta = document.getElementById(`frutaText`);
function addFruta () {
    frutas.push(textFruta.value);
    console.log(frutas);
}    
