const frutas = ["laranja", "limão", "uva"];

const adicionaFruta1 = document.getElementById("fruta-1") 
adicionaFruta1.innerHTML = frutas[0]

const adicionaFruta2 = document.getElementById("fruta-2") 
adicionaFruta2.innerHTML = frutas[1]

const adicionaFruta3 = document.getElementById("fruta-3") 
adicionaFruta3.innerHTML = frutas[2]

const adicionaFruta4 = document.getElementById("fruta-4")

let capturarValor = document.getElementById("texto")


const inseririrFruta = () =>{

    adicionaFruta4.innerHTML = capturarValor.value
    capturarValor.value = ""

}

