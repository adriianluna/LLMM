
// Constante para cambiar de color las filas rojas
// const boton = document.querySelector(".cambiaColor");
// const cajas = document.querySelectorAll(".cajaRoja");




const boton = document.querySelector(".cambiaColor");
const cajas = document.querySelectorAll(".cajaRoja");
const cajasAmarillas = document.querySelectorAll(".cajaAmarilla");
// funcion
boton.addEventListener("click", cambiaColor);

function cambiaColor(){
    // La clase de las cajas que queremos recorrer
    cajas.forEach(a => {
        if (a.style.backgroundColor === "red") {
            a.style.backgroundColor = "green";
        } else {
            a.style.backgroundColor = "red";
        }
    });
    // La clase de las cajas que queremos recorrer
    cajasAmarillas.forEach(b => {
        if (b.style.backgroundColor === "yellow") {
            b.style.backgroundColor = "white";
        } else {
            b.style.backgroundColor = "yellow";
        }
    });
};


// cambiar imagen con foto

const fotos = document.querySelector(".foto"); 
const botonFoto = document.querySelector(".cambiaImagen");

botonFoto.addEventListener("click", cambiaFoto);

function cambiaFoto() {
    // Obtener el nombre del archivo de la imagen actual
    const imagen = fotos.src.split("/").pop();

    if (imagen.endsWith("spiderman.jpg")) { 
        // Cambia a otra imagen
        fotos.src = "./assets/hw.jpg"; 
    } else {
        // Vuelve a Spiderman
        fotos.src = "./assets/spiderman.jpg"; 
    }
}

// Cambiar fondo de la pagina web
const cambiarFondo = document.querySelector(".cambiarFondo");

cambiarFondo.addEventListener("click", cambiarFondoPagina);

function cambiarFondoPagina() {
    if (document.body.style.backgroundColor == "bisque") {
        document.body.style.backgroundColor = "grey"; // Fondo original
    } else {
        document.body.style.backgroundColor = "bisque";
    }
}

// ENtra al recuadro y te pide un numero
const dentro = document.querySelector(".dentro");

dentro.addEventListener("mouseenter", pideNumero);

function pideNumero() {
    const numero = prompt("Introduce un número");
    const numero2 = prompt("Introduce un número");

    if (!isNaN(numero) && !isNaN(numero2)) {
        suma = parseFloat(numero) + parseFloat(numero2);
        alert(`La suma de los números es: ${suma}`);
    } else {
        alert("Por favor, introduce números válidos.");
    }

}





