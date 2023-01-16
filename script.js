


const frutas = ["laranja", "limão", "uva"];

const inserirItens = () => {
    const laranja = document.getElementById("fruta-1")
    laranja.innerHTML += frutas[0]

    const limao = document.getElementById("fruta-2")
    limao.innerHTML += frutas[1]

    const uva = document.getElementById("fruta-3")
    uva.innerHTML += frutas[2]

}

// const elemento = document.getElementsByTagName("li")
// console.log(elemento)






const capturaValores = () => {
    const nome = document.getElementById("nome")
    
    console.log(nome.value)
    nome.value = ""
    
}


const item = document.getElementById("nome")
const frutaEscolhida = document.getElementById("fruta-4")

const adicionaItem = () => {
    frutaEscolhida.innerHTML += item.value
    
}
