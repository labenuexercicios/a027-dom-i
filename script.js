const frutasHtml = document.querySelector('#lista-de-frutas')
const fruta5 = document.getElementById('fruta-4')
const texto = document.getElementById('novo')

const fruta1 = document.getElementById('fruta-1')
const fruta2 = document.getElementById('fruta-2')
const fruta3 = document.getElementById('fruta-3')


let cont = 0
const frutas = ["laranja", "limão", "uva"];

//exercicio 01

function handleFrutas () {
    fruta1.innerHTML = frutas[0]
    fruta2.innerHTML = frutas[1]
    fruta3.innerHTML = frutas[2] 
}
handleFrutas()

//Exercicio 01 com for
    for (const fruta of frutas) {
        cont = cont+1
        const el = document.createElement('li')
        el.setAttribute("id", `fruta-${cont}`)
        el.innerText = `${fruta}`;
        frutasHtml.appendChild(el);
      }



//exercicio 03 normal
//forma 1

//   const handleClick = () => {
//     fruta5.innerHTML = texto.value
//     texto.value = ''
//   }

//Exercicio 03 de forma dinamica 
  const handleClick = () => {
    cont +=1
    const linha = document.createElement('li')
    linha.setAttribute("id", `fruta-${cont}`)
    frutasHtml.appendChild(linha);
    linha.innerHTML = texto.value
    

    let novoItemArray = texto.value
    frutas.push(novoItemArray)
    texto.value = ''
    console.log(frutas)
  }
  

const handleChange = () => {
    console.log(texto.value)
}