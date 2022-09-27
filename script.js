const frutas = ["laranja", "limão", "uva"];

let fruta1= document.getElementById("fruta-1");
fruta1.innerHTML =frutas[0]

let fruta2= document.getElementById("fruta-2");
fruta2.innerHTML =frutas[1]

let fruta3= document.getElementById("fruta-3");
fruta3.innerHTML =frutas[2]

let fruta4= document.getElementById("fruta-4");

let input= document.getElementById("name");

function imprimir(){
    console.log(input.value)

}

function adicionar(){
fruta4.innerHTML=input.value

}
dwq-dpfv-eoz