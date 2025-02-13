
// Constantes
// Cambiamos el color del  mensaje
const parrafoColor = document.querySelector(".mensaje");
// cambio de imagenes
const foto = document.querySelector(".tortuga");
const edadEntre = document.querySelector(".edad");
// cambiar color d e las capas 
const cambiaColor = document.querySelectorAll(".boton");



// cambiamso a rojo cuando entra y a negro cuando sale
parrafoColor.addEventListener("mouseenter",() => {parrafoColor.style.color = "red";});
parrafoColor.addEventListener("mouseleave",() => {parrafoColor.style.color = "black";});
//Cambia la foto cuando entras a la foto
foto.addEventListener("mouseenter",() => {foto.src="./assets/spiderman.png";});
foto.addEventListener("mouseleave",() => {foto.src="./assets/tortuga.png";});
// edad
edadEntre.addEventListener("click",mensaje);


function mensaje() {
    prompt("Pagina cargada");
}

// cambia color
cambiaColor.addEventListener("click", () => {negro.classList.toggle("rojo");});


