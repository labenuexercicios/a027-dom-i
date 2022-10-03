const frutas = ["laranja", "limão", "uva", "maça"];



let listaDeFrutas = document.getElementsByTagName ("li")

for(let i in frutas){
    listaDeFrutas[i].innerHTML=frutas[i]
   
}

const adicionaItem = () => {
    const item = document.getElementById("texto")
    const lista = document.getElementById("lista-de-frutas")
    lista.innerHTML += `<li>${item.value}</li>`
    item.value = ""
}