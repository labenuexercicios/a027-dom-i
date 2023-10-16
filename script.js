
//exercicio 1 

const frutas = ["laranja", "limão", "uva"]

const listaDeFrutas = document.getElementById("fruta-1")

console.log(listaDeFrutas.innerHTML)
listaDeFrutas.innerHTML += frutas[0];

const frutasDois = document.getElementById("fruta-2")
frutasDois.innerHTML += frutas[1];

const frutasTres = document.getElementById("fruta-3")
frutasTres.innerHTML += frutas[2]


// EXERCICIO II

const inputFrutinhas = document.getElementById("frutinhas")
//console.log(inputFrutinhas.value)
inputFrutinhas.value = ""


//EXERCICIO III 

function pegarValorInput() {
    valorInput = inputFrutinhas.value
    //console.log(valorInput)
}

function adicionarFrutaNaLista() {
    const novaFruta = inputFrutinhas.value

    if (novaFruta) {
        const frutasQuatro = document.getElementById("fruta-4")
        frutasQuatro.textContent = novaFruta;
        inputFrutinhas.value = "";
    }
}



