//SELECTEURS
const body = document.querySelector("body");
const button = document.querySelector(".logo");
const txt = document.querySelector (".présentation h1");
const p = document.querySelector (".présentation p");
const nav = document.querySelector ("nav ul li a");

//EVENEMENTS

button.addEventListener("click", function(){

body.style.backgroundColor = 'black'
txt.style.color = 'white'
p.style.color = 'white'
button.src = 'images/monlogoo.png'
nav.style.color = 'white'

})

console.log(button);
