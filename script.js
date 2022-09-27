const frutas = ["laranja", "limão", "uva"];
// exercicio 1
const listaFrutas = document.getElementById`lista-de-frutas`;
const fruta1 = document.getElementById(`fruta-1`);
const fruta2 = document.getElementById(`fruta-2`);
const fruta3 = document.getElementById(`fruta-3`);
const fruta4 = document.getElementById(`fruta-4`);


for (let i = 0; i < frutas.length; i++) {
  document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i]
}



// exercicio 2  e exercicio 3 
const addFrutas = document.getElementById(`fruta`);
function addFruta () {
    console.log(addFrutas.value);//exercicio 2 
    fruta4.innerHTML = addFrutas.value//exercicio 3
    frutas.push(addFrutas.value);
    addFrutas.value="";
    
}    
console.log(frutas);


























