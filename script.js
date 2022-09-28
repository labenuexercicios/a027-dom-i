const frutas = ["laranja", "limão", "uva"];

const frutaUm = document.getElementById("fruta-1")

frutaUm.innerHTML= frutas[0]

const frutaDois = document.getElementById("fruta-2")
frutaDois.innerHTML = frutas[1]

const frutaTre = document.getElementById("fruta-3")
frutaTre.innerHTML = frutas[2]

const imp = document.getElementById("name")
console.log(imp.value)


function clic(){
    console.log('ola')
}

const clicDois = () => {
    const frutaQua = document.getElementById("fruta-4")
    frutaQua.innerHTML = imp.value
}




