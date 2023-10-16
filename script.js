
//exercicio 1 

const frutas = ["laranja", "limão", "uva"]

const listaDeFrutas =  document.getElementById("fruta-1")

console.log(listaDeFrutas.innerHTML)
listaDeFrutas.innerHTML += frutas[0];

const frutasDois =  document.getElementById("fruta-2")
frutasDois.innerHTML += frutas[1];

const frutasTres =  document.getElementById("fruta-3")
frutasTres.innerHTML += frutas[2]


// EXERCICIO II

const inputFrutinhas = document.getElementById("frutis")
console.log(inputFrutinhas.value)


