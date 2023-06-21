//Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');//El texto

function randomHexColor() {
  let digits = '0123456789ABCDEF';
  let saveColor = '#';

  for(let i = 1; i <= 6; i++){
    let randomIndex = Math.floor(Math.random() * 16);
    saveColor += digits[randomIndex];
  }
  return saveColor;
}

boton.addEventListener('click', function(){
  let randomColor = randomHexColor();
  //Se actualiza el texto
  color.textContent = randomColor;
  //Se actualiza el color de fondo
  document.body.style.backgroundColor = randomColor;
})