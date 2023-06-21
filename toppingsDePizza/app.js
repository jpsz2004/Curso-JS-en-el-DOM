// const title = document.getElementById('title');//Seleccionar elemento a partir de su id
// console.log(title.innerHTML);//Lo que esta por dentro de este titulo-TAG NAME se usa para ver h1
//-----------------------------------------------------------------------

// const toppings = document.getElementsByClassName('topping');//Seleccionar elementos con base a una clase especifica
// console.log(toppings[0]);

//---------------------------------------------------------------------

// const misToppings = document.getElementsByTagName('li');
// console.log(misToppings);

//---------------------------------------------------------------------

// const primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
// console.log(primerToppingNaranja);//Selecciona el primer elemento que aparece con esa propiedad

//---------------------------------------------------------------------

// const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
// console.log(toppingsNaranja);//Selecciona todos los elementos con dicha propiedad

//---------------------------------------------------------------------

// //ASIGNAR ESTILO
// const primerTopping = document.querySelector('.topping');
// // console.log(primerTopping);
// primerTopping.style.backgroundColor = 'blue';//Cambia el fondo del topping
// primerTopping.style.color = 'red';//Cambia el color de letra

//---------------------------------------------------------------------

// //Acceder al texto
// const listaDeToppings = document.getElementById('listaToppings');
// console.log(listaDeToppings.innerText);
// console.log(listaDeToppings.textContent);
// console.log(listaDeToppings.innerHTML);
// //Modificar texto
// const title = document.getElementById('title');
// title.innerText = 'Mis Toppings Favoritos';

//---------------------------------------------------------------------

// //MODIFICAR ATRIBUTOS
// const enlace = document.getElementsByTagName('a');
// // console.log(enlace[0].getAttribute('href'));
// //Se puede eliminar con removeAttribute
// // console.log(enlace[0].removeAttribute('href'));
// //Modificar
// // console.log(enlace[0].setAttribute('href', 'https://www.google.com/?hl=es'));

//---------------------------------------------------------------------

// //AGREGAR O MODIFICAR CLASES
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.classList);
// primerTopping.classList.add('textoVerde');

//---------------------------------------------------------------------

// //VERIFICAR SI UNA CLASE  EXISTE
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.classList.contains('fondo-marron'));//Usar en condicional si un elemento posee esta clase, entonces realizar una acción. Debería servir para realizar el MEMORAMA
// console.log(primerTopping.classList);

//---------------------------------------------------------------------

// //ELIMINAR UNA CLASE
// const primerTopping = document.querySelector('.topping');
// primerTopping.classList.remove('topping');
// console.log(primerTopping.classList);

//---------------------------------------------------------------------

// //CREAR UN ELEMENTO
// const listaDeToppings = document.getElementById('listaToppings');
// const toppingNuevo = document.createElement('li');

// toppingNuevo.classList.add('topping', 'fondo-marron');//El add permite agregar varias clases a la vez
// toppingNuevo.innerText = 'Queso extra';
// listaDeToppings.append(toppingNuevo);//Agrega un nuevo nodo

//---------------------------------------------------------------------

// //REMOVER UN ELEMENTO
// const listaDeToppings = document.getElementById('listaToppings');
// const toppingNuevo = document.createElement('li');

// toppingNuevo.classList.add('topping', 'fondo-marron');//El add permite agregar varias clases a la vez
// toppingNuevo.innerText = 'Queso extra';
// listaDeToppings.append(toppingNuevo);//Agrega un nuevo nodo

// listaDeToppings.remove();

//---------------------------------------------------------------------

// //RECORRER EL DOM
// const listaDeToppings = document.getElementById('listaToppings');

// // console.log(listaDeToppings.parentElement);
// // console.log(listaDeToppings.children);
// // console.log(listaDeToppings.firstChild);
// // console.log(listaDeToppings.firstElementChild);
// // console.log(listaDeToppings.lastChild);

// console.log(listaDeToppings.previousElementSibling);
// console.log(listaDeToppings.nextElementSibling);

//---------------------------------------------------------------------

//EVENTOS DEL DOM
//Poniendo onclick = nameFunction() se puede realizar el event listener
const albahaca = document.getElementById('albahaca');

// const mostrarClick = (e) =>{
//   console.log(e);
// }

function mostrarClick(topping){
  console.log(topping);
}

albahaca.addEventListener('click', mostrarClick);

