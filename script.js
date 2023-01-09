const frutas = ["laranja", "limão", "uva"];

/*
# Exercício 1

Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.
*/

for(let i = 1; i<4; i++){
    let fruit = i - 1
    const fruta = "fruta-"+i
    document.getElementById(`${fruta}`).innerHTML = frutas[fruit]
}

// const fruta1 = document.getElementById("fruta-1")
// fruta1.innerHTML = 'laranja'
// console.log(fruta1.innerHTML)

// const fruta2 = document.getElementById("fruta-2")
// fruta2.innerHTML = 'limão'
// console.log(fruta2.innerHTML)

// const fruta3 = document.getElementById("fruta-3")
// fruta3.innerHTML = 'uva'
// console.log(fruta3.innerHTML)


/*

# Exercício 2

Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
Cole o comando aqui:
```jsx
    cole o código JS nesta área.
```
*/

const fruta4 = document.getElementById("fruta4")
fruta4.value = ''
console.log(fruta4.value)



/*
# Exercício 3

Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

*/
const adicionar = () => {
    let fruta = document.getElementById("fruta-4")
    fruta.innerHTML = document.getElementById("frutaNova").value
    frutas.push(fruta.innerHTML)
    console.log(frutas)
}



 