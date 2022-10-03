const frutas = ["laranja", "limão", "uva"];

let frutaUm = document.getElementById("fruta-1")
frutaUm.innerHTML += frutas[0]

let frutaDois = document.getElementById("fruta-2")
frutaDois.innerHTML += frutas[1]

let frutaTres = document.getElementById("fruta-3")
frutaTres.innerHTML += frutas[2]

let frutaQuatro = document.getElementById("fruta-4")

//escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.

function imprimirTextoDigitado() {
    let textoDoInput = document.getElementById("fruta")
    console.log(textoDoInput.value)
}

//Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

function adicionarInput() {
    frutaQuatro.innerHTML = document.getElementById("fruta").value
}  