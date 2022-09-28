let frutas = ["laranja", "limão", "uva"];

//Exercicio 1
let laranja = document.getElementById('fruta-1') 
laranja.innerHTML = frutas[0];

let limao = document.getElementById('fruta-2') 
limao.innerHTML = frutas[1];

let uva = document.getElementById('fruta-3') 
uva.innerHTML = frutas[2]

//Com laço
for (let i = 0; i < frutas.length; i++) {
    document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i]
}



//Exercicio 2
let txt = document.getElementById('txt')


//Exercicio 3
let fruta = document.getElementById('fruta-4')

function Clicou() {
    fruta.innerHTML = txt.value
    txt.value = ''
}
