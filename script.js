const frutas = ["laranja", "limão", "uva"];

let mostrarFruta = document.getElementById("fruta-1")
mostrarFruta.innerHTML = frutas[0]

mostrarFruta = document.getElementById("fruta-2")
mostrarFruta.innerHTML = frutas[1]

mostrarFruta = document.getElementById("fruta-3")
mostrarFruta.innerHTML = frutas[2]

const fruta4 = document.getElementById("fruta-4")
let quartaFruta = document.getElementById("fruta")




const adicionarFruta = () => {
   fruta4.innerHTML = quartaFruta.value
   
   quartaFruta.value = ""
    
}

const colocarFruta = () => {
    adicionarFruta()
}
