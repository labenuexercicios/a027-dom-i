const frutas = ["laranja", "limão", "uva"];

for(let i = 0; i < frutas.length; i++){
    document.getElementById(`fruta-${i+1}`).innerHTML = frutas[i]
}

// const fruta1 = document.getElementById('fruta-1');
// fruta1.innerHTML = frutas[0]

// const fruta2 = document.getElementById('fruta-2');
// fruta2.innerHTML = frutas[1]

// const fruta3 = document.getElementById('fruta-3');
// fruta3.innerHTML = frutas[2]

const frutaImput = document.getElementById("inputFruta")
console.log(frutaImput.value)

const fruta4 = document.getElementById("fruta-4")

function adicionaFruta() {
    fruta4.innerHTML = frutaImput.value
}

