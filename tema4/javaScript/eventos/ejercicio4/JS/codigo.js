
// Constantes
// Cambiamos el color del  mensaje
const parrafoColor = document.querySelector(".mensaje");
// cambio de imagenes
const foto = document.querySelector(".tortuga");
const edadEntre = document.querySelector(".input");
// cambiar color d e las capas 
const cambiaColor = document.querySelectorAll(".boton");
const colorRojo = document.querySelectorAll(".rojo");
// Enviar edad
const botonEdad = document.querySelector(".boton");
// PArrafo vacio de la edad
const error = document.querySelector(".error");
// Botones para cambiar capa negra, letras blancas
const capa1 = document.querySelector(".boton1");
const estiloCapa1 = document.querySelector(".estilo");
// Botoness para cambiar capa blanca y letra negras
const capa2 = document.querySelector(".boton2");
const estiloCapa2 = document.querySelector(".estilo");
// Botoness para cambiar capa blanca y letra negras
const capa3 = document.querySelector(".boton3");
const estiloCapa3 = document.querySelector(".estilo");


// cambiamso a rojo cuando entra y a negro cuando sale
parrafoColor.addEventListener("mouseenter",() => {parrafoColor.style.color = "red";});
parrafoColor.addEventListener("mouseleave",() => {parrafoColor.style.color = "black";});
//Cambia la foto cuando entras a la foto
foto.addEventListener("mouseenter",() => {foto.src="./assets/spiderman.png";});
foto.addEventListener("mouseleave",() => {foto.src="./assets/tortuga.png";});
// edad
botonEdad.addEventListener("click",intervalo);
// Botones de cambiar capas
capa1.addEventListener("click",() => {estiloCapa1.style.color = "white", estiloCapa1.style.backgroundColor = "black";});
capa2.addEventListener("click",() => {estiloCapa2.style.color = "black", estiloCapa2.style.backgroundColor = "white";});
capa3.addEventListener("click",() => {estiloCapa3.style.color = "grey", estiloCapa3.style.backgroundColor = "red";});
 

function intervalo() {
   error.textContent = "";
    let num = parseInt(edadEntre.value); 
    if(isNaN(num)){
        error.textContent = "Introduce un número";
    }else if(num >= 1 && num <= 100){
    error.textContent = "El número está entre 1 y 100";
   }else{
    error.textContent = "El número no está entre 1 y 100";
   }
  
}

// cambia color
cambiaColor.addEventListener("click", () => {colorRojo.classList.toggle("rojo");});


