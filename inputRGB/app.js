const inputRed = document.getElementById('rojo');
const inputGreen = document.getElementById('verde');
const inputBlue = document.getElementById('azul');

const redText = document.getElementById('textoRojo');
const greenText = document.getElementById('textoVerde');
const blueText = document.getElementById('textoAzul');

//Modifica la variable con el valor que se obtiene del indicador del input
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

function updateColor(rojo, verde, azul){
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

//Actualizar Rojo
inputRed.addEventListener('change', (e) =>{
  red = inputRed.value;
  redText.innerText = red;
  updateColor(red, green, blue);
})

//Actualizar verde
inputGreen.addEventListener('change', () =>{
  green = inputGreen.value;
  greenText.innerText = green;
  updateColor(red, green, blue);
})

//Actualizar azul
inputBlue.addEventListener('change', (e) =>{
  blue = inputBlue.value;
  blueText.innerText = blue;
  updateColor(red, green, blue);
})

