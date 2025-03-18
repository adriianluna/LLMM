// Mensaje
const mensaje = document.querySelector(".mensaje");
// texto
const texto = document.getElementById(".color");
mensaje.addEventListener("mouseenter", cambiaColor);
mensaje.addEventListener("mouseleave", cambiarColor2);

function cambiaColor() {

    mensaje.style.color = "red";

}

function cambiarColor2() {

    mensaje.style.color = "black";

}

//Cambiar color de los recuadros

// Cajas negras
const negro = document.querySelectorAll(".negro");

//Boton
const boton = document.querySelector(".botonCapas");
boton.addEventListener("click", colorRojo);

function colorRojo(){

    negro.forEach(element => {
        if(element.style.backgroundColor === "black"){
            element.style.backgroundColor = "red";
        }else{
            element.style.backgroundColor = "black";
        }
        
    });



}

//Texto
const input = document.querySelector("input");
//boton numeros
const botonNumeros = document.querySelector(".boton");
//Mostrar resultado
const resultado = document.querySelector(".error");

botonNumeros.addEventListener("click", comprobarNumero);

function comprobarNumero(){

    let numero = input.value;
    resultado.textContent = "";
    if(numero >= 1 && numero <= 100){
        resultado.textContent ="El numero es " + numero;
    }else{
        resultado.textContent = "NO puede ser menor que uno ni mayor que 100";
    }

}

//capa
const capa = document.querySelector(".estilo");

//Cambiar colro de capa
const boton1 = document.querySelector(".boton1");

const boton2 = document.querySelector(".boton2");

const boton3 = document.querySelector(".boton3");

boton1.addEventListener("click", () => {capa.style.backgroundColor = "black", capa.style.color = "white";});
boton2.addEventListener("click", () => {capa.style.backgroundColor = "white", capa.style.color = "black";});
boton3.addEventListener("click", () => {capa.style.backgroundColor = "grey", capa.style.color = "red";});


// fotos
const fotos = document.querySelector(".tortuga");
// Cambiar imagen
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




