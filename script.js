const frutas = ["laranja", "limão", "uva"];

//Exercício 01

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

//Exercício 02 no HTML.

//Exercício 03
const input = document.getElementById('fruta')
const fruta4 = document.getElementById('fruta-4')

function adicionaFruta() {
  fruta4.innerHTML = input.value
}

//Conclusão do 03 com auxilio da profa. Tay