const frutas = ["laranja", "limão", "uva"];

let item01 = document.getElementById('fruta-1');
item01.innerHTML = frutas[0];

let item02 = document.getElementById('fruta-2');
item02.innerHTML = frutas[1];

let item03 = document.getElementById('fruta-3');
item03.innerHTML = frutas[2];

let item04 = document.getElementById('fruta-4');

let input = document.getElementById('texto');

function adicionarFruta(){
    item04.innerHTML = input.value;
    input.value = '';
};