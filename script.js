const frutas = ["laranja", "limão", "uva"];

const inserirFruta1 = document.getElementById("fruta-1")
inserirFruta1.innerHTML = frutas[0]

const inserirFruta2 = document.getElementById("fruta-2")
inserirFruta2.innerHTML = frutas[1]

const inserirFruta3 = document.getElementById("fruta-3")

inserirFruta3.innerHTML = frutas[2]

const inserirFrutas = document.getElementById("fruta-4")

const valorInput = document.getElementById("fruta-extra")

const adicionarFruta = () =>{
    inserirFrutas.innerHTML += "<li>" + valorInput.value + "</li>"

    valorInput.value = ""
}