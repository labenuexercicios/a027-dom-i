# Exercício 2

Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
Cole o comando aqui:
```jsx

    // HTML

    <input onchange="imprimir()" id="input" name="input" type="text">

    // JS

    const input = document.getElementById("input")

    const imprimir = () => {
        console.log(input.value)
        input.value = ""
    }
```
