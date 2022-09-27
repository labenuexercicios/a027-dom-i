const frutas = ["laranja", "limão", "uva"];

let fruta1 = document.getElementById("fruta-1");
fruta1.innerHTML = frutas[0];

let fruta2 = document.getElementById("fruta-2");
fruta2.innerHTML = frutas[1];

let fruta3 = document.getElementById("fruta-3");
fruta3.innerHTML = frutas[2];

let fruta4 = document.getElementById("fruta-4");

function novoInput() {
  console.log(nomeDaFruta.value);
}

function novaFruta() {
  fruta4.innerHTML = nomeDaFruta.value;
}
