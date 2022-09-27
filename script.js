const frutas = ["laranja", "limão", "uva"];

let fruta1 = document.getElementById("fruta-1");
let fruta2 = document.getElementById("fruta-2");
let fruta3 = document.getElementById("fruta-3");
let fruta4 = document.getElementById("fruta-4");

fruta1.innerHTML = frutas[0];
fruta2.innerHTML = frutas[1];
fruta3.innerHTML = frutas[2];

function novoInput() {
  console.log(nomeDaFruta.value);
}

function novaFruta() {
  fruta4.innerHTML = nomeDaFruta.value;
  nomeDaFruta.value = "";
}

// // fazendo o EXE 1 com For
// for (let i = 0; i < frutas.length; i++) {
//   document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i];
// }
