// const cebolla = document.getElementById('cebolla');

// const clickear = (e) =>{
//     console.log(e.target.innerText);//Lo que recibe es un evento
// }

// cebolla.addEventListener('click', clickear);

const toppings = document.getElementsByClassName('topping');

for(const topping of toppings){
    topping.addEventListener('click', (e) =>{
        console.log(e.target.innerText);
    });
    // console.log(topping);
}

