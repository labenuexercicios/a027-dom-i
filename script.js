const frutas = ["laranja", "limão", "uva"]

document.getElementById('fruta-1').innerHTML = frutas[0];
document.getElementById('fruta-2').innerHTML = frutas[1];
document.getElementById('fruta-3').innerHTML = frutas[2];

const add_fruta = () => {

  document.getElementById('fruta-4').innerHTML = document.getElementById('fruta4').value;
  document.getElementById('fruta4').value = "";

}
