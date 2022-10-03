const frutas = ["laranja", "limão", "uva"];

// # Exercício 1

// Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.

let nomeLaranja = document.getElementById("fruta-1") 
nomeLaranja.innerHTML = frutas[0]

let nomeLimao = document.getElementById("fruta-2")
nomeLimao.innerHTML = frutas[1]

let nomeUva = document.getElementById("fruta-3")
nomeUva.innerHTML = frutas[2]


let lendoValor = document.getElementById("fruta-4")
console.log(lendoValor.innerHTML)

function printarInput(){
    let printInput = document.getElementById("texto")
    console.log(printInput.value)
}

function mostraInput(){
    lendoValor.innerHTML = document.getElementById("texto").value
}
