const frutas = ["laranja", "limão", "uva"];

const valordaf1 = document.getElementById("fruta-1")

//Ou assim:

// document.getElementById("nome").innerHTML = frutas[0]

valordaf1.innerHTML = frutas[0]

// for(let x = 0; x < frutas.length; x++){
//     valordaf1.innerHTML = frutas[x]
// }

const valordaf2 = document.getElementById("fruta-2")

valordaf2.innerHTML = frutas[1]

const valordaf3 = document.getElementById("fruta-3")

valordaf3.innerHTML = frutas[2]

const valordaf4 = document.getElementById("fruta-4")

const colocavalor = () =>{
    valordaf4.innerHTML = document.getElementById("nome").value
    frutas.push(valordaf4.value)
}
