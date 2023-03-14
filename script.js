const frutas = ["laranja", "limão", "uva"];

let primeiraFruta = document.getElementById("fruta-1")
primeiraFruta.innerHTML = frutas[0]

let segundaFruta = document.getElementById("fruta-2")
segundaFruta.innerHTML = frutas[1]

let terceirtaFruta = document.getElementById("fruta-3")
terceirtaFruta.innerHTML = frutas[2]

let quartaFruta = document.getElementById('fruta-4')
quartaFruta.innerHTML = frutas[3]

const novaFruta = document.getElementById('nome')

console.log(frutas)

const addFruta = () => {
    quartaFruta.innerHTML = novaFruta.value
    console.log(novaFruta.value)
}

consonle.log(frutas)
