// Exercício 1
const frutas = ["laranja", "limão", "uva"];

// Sem usar o FOR
let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

//  Usando FOR 
// const li = document.getElementsByTagName("li");

// for (i = 0; i < li.length - 1; i++) {
//     li[i].innerHTML = frutas[i];
// }


// Exercício 2

//-----------------------------------------------------


// Exercício 3

const adicionarALista = document.getElementById("input")

let fruta4 = document.getElementById("fruta-4")

const botao = () => {
    fruta4.innerHTML = input.value
    console.log(input.value)
    input.value = ""
} 
