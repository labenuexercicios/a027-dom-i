const frutas = ["laranja", "limão", "uva"];     

let primeiraFruta = document.getElementById("fruta-1")
primeiraFruta.innerHTML += frutas [0]

let segundaFruta = document.getElementById("fruta-2")
segundaFruta.innerHTML += frutas [1]

let terceiraFruta = document.getElementById("fruta-3")
terceiraFruta.innerHTML += frutas [2]
 
let texto = document.getElementById("novafruta")
function adicionarFruta(){
    console.log(texto.value)
}

function adicionarValorLista(){
    let add = document.getElementById("fruta-4")
    add.innerHTML += texto.value
}