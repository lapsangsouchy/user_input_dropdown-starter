/* @TODO Get References */
let menu = document.getElementById('menu');
let button = document.querySelector('button');
let screenImage = document.querySelector('img');
let pokemonInfoDiv = document.getElementById('pokemon_info');

/* @TODO Event Handler */
/*  
    try updating when button is clicked vs when
    dropdown value changes with
    menu.onchange = 
*/

button.onclick = function (event) {
  // prevent the page from reloading

  event.preventDefault();

  // capture userChoice
  let userChoice = menu.value;
  console.log(userChoice);

  // show Pokemon picture based on userChoice
  if (userChoice == 'pika') {
    // change src of screenImage
    screenImage.src = 'images/pikachu.png';
    // change innerHTML of pokemonInfoDiv
    pokemonInfoDiv.innerHTML = 'a yellow mouse';
  } else if (userChoice == 'bulba') {
    screenImage.src = 'images/bulbasaur.png';
    pokemonInfoDiv.innerHTML = 'a green seed';
  } else if (userChoice == 'char') {
    screenImage.src = 'images/charmander.png';
    pokemonInfoDiv.innerHTML = 'an orange chameleon';
  } else if (userChoice == 'squir') {
    screenImage.src = 'images/squirtle.png';
    pokemonInfoDiv.innerHTML = 'a blue turtle';
  }
};
