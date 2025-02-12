// constantes
const h = document.querySelector(".enc");
const p = document.querySelector(".p1");
const img = document.querySelector(".spiderman");
const b1 = document.querySelector(".b1");
const b2= document.querySelector(".b2");
const b3 = document.querySelector(".b3");

// CUando se pulsa el boton uno cambia de color el parrafo
b1.addEventListener("click",() => {p.style.color = "red";});
//Dbl click para quitar el color
b1.addEventListener("dblclick",() => {p.style.color = "black";});
// cuando se pulsa el boton dos cambia de img
b2.addEventListener("click",() => {img.src="./assets/formula1.jpg";});
// Cando se pulse e lboton 3 se cambia el  color del h1
b3.addEventListener("click", () => {h.classList.toggle("nueva");});
//DOble click para añadir un fondo
b3.addEventListener("dblclick", () => {h.classList.toggle("fondo");});
// cuando pulsemos el boton 2 dos veces se vuleve a la imagen primera
b2.addEventListener("dblclick",() => {img.src="./assets/spiderman.jpg";});






