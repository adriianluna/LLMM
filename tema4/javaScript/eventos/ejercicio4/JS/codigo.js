
// cambiamso a rojo cuando entra y a negro cuando sale
// Cambiamos el color del  mensaje
const parrafoColor = document.querySelector(".mensaje");
parrafoColor.addEventListener("mouseenter",() => {parrafoColor.style.color = "red";});
parrafoColor.addEventListener("mouseleave",() => {parrafoColor.style.color = "black";});


//Cambia la foto cuando entras a la foto
// cambio de imagenes



const fotos = document.querySelector(".tortuga");
fotos.addEventListener("mouseenter", () => {
    //Saca el nomrbe de la imagen
    const imagen = fotos.src.split("/").pop();
    // Si la imagen es igual que 
    if (imagen === "tortuga.png") {
        fotos.src = "./assets/spiderman.png";
    } else {
        fotos.src = "./assets/tortuga.png";
    }
});


// edad
// Enviar edad
const botonEdad = document.querySelector(".boton");
// PArrafo vacio de la edad
const error = document.querySelector(".error");
botonEdad.addEventListener("click",intervalo);
// Intervalo de edad
//Para el borde
const input= document.querySelector(".input");
function intervalo() {
    error.textContent = "";
     let num = parseInt(edadEntre.value); 
     if(isNaN(num)){
         error.textContent = "Introduce un número";
         input.style.borderColor = "red";
     }else if(num >= 1 && num <= 100){
        input.style.borderColor = "green";
        error.textContent = "El número está entre 1 y 100";
    }else{
     error.textContent = "El número no está entre 1 y 100";
        input.style.borderColor = "red";
    }
   
 }


// Botones de cambiar capas
// Botones para cambiar capa negra, letras blancas
const capa1 = document.querySelector(".boton1");
//Estilos de las capas
const estiloCapa = document.querySelector(".estilo");
// Botoness para cambiar capa blanca y letra negras
const capa2 = document.querySelector(".boton2");
// Botoness para cambiar capa blanca y letra negras
const capa3 = document.querySelector(".boton3");
capa1.addEventListener("click",() => {estiloCapa.style.color = "white", estiloCapa.style.backgroundColor = "black";});
capa2.addEventListener("click",() => {estiloCapa.style.color = "black", estiloCapa.style.backgroundColor = "white";});
capa3.addEventListener("click",() => {estiloCapa.style.color = "grey", estiloCapa.style.backgroundColor = "red";});

// Cambiar color de las 4 capas
// cambiar color de las capas rojo o negro
const cambiaColor = document.querySelector(".botonCapas");
const capas = document.querySelectorAll(".negro");
//cambiaColor.addEventListener("click", () => fondoColor(capas));

// cambia color
// cambiaColor.addEventListener("click", () => {capas.forEach(a => a.classList.toggle("rojo"));});

// funcion
cambiaColor.addEventListener("click", () => {
    capas.forEach(a => {
        if (a.style.backgroundColor === "black") {
            a.style.backgroundColor = "red";
        } else {
            a.style.backgroundColor = "black";
        }
    });
});







