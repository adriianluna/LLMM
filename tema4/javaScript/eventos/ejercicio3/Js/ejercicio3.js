
// constantes
const p1 = document.querySelector(".dobleClick");
const b = document.querySelector(".alert");
const b2 = document.querySelector("body");
const boton = document.querySelector(".button");
const robot = document.querySelector(".robot");
const ninja = document.querySelector(".tortuga");
const cursor = document.querySelector(".cursor");

// Eventos
// doble click para el alert
p1.addEventListener("dblclick",() => alert("Parrafo 2 click"));
// click para el alert
b.addEventListener("click",mensaje);
// carga de la pagina
b2.addEventListener("load",mensaje2());
// click para el contador
boton.addEventListener("click",pulsar);
// click para el mayor o menor
robot.addEventListener("click",numeroMayorMenor);
// si el raton esta dento calcula par o impar
ninja.addEventListener("mouseleave",caclulaParImpar);
// si el raton esta dentro calcula la multiplicacion
cursor.addEventListener("mouseenter",calculaMultiplicacion);

// Funciones
// Calculo de la multiplicacion
function calculaMultiplicacion(){
    // pedimos dos numeros si el cursor esta dentro, si no son numeros no se hace nada
    let num1 = parseInt(prompt("Introduce un número: "));
    let num2 = parseInt(prompt("Introduce un número: "));
    // comprobacion de que sean numeros
    if( isNaN(num1) ||  isNaN(num2)){
        // Lanzamos alert si no son numeros
        alert("Los numeros no son validos");
    }else{
        // si son numeros calculamos la multiplicacion
        let multiplicacion = num1 * num2;
        // mostramos el resultado
        alert("La multiplicacion de " + num1  + " y " + + num2 + " es " + multiplicacion);
    }

}

// Calculo del numero mayor o menor
function numeroMayorMenor(){
    // pedimos dos numeros si se hace click en la imagen del robot, si no son numeros no se hace nada
    let num1 = parseInt(prompt("Introduce un número: "));
    let num2 = parseInt(prompt("Introduce un número: "));
    // comprobacion de que sean numeros
    if( isNaN(num1) ||  isNaN(num2)){
        // Lanzamos alert si no son numeros
        alert("los numeros no son validos");
        }else{
            // si son numeros comprobamos cual es mayor
            if(num1 > num2){
                // mostramos el resultado en el caso de que el primer numero sea mayor que el segundo
                alert("El " + num1 + " es mayor");
                // si son iguales 
            }else if(num1 == num2){
                // mostramos el resultado en el caso de que los numeros sean iguales
                alert("Los numeros son iguales");
                // si el segundo numero es mayor
            }else{
                // mostramos el resultado en el caso de que el segundo numero sea mayor que el primero
                alert("El " + num2 + " es mayor");
            }
       } 
       
    

}
// Calculo de si el numero es par o impar cuando el raton sale del recuadro de la imagen de la tortuga
function caclulaParImpar(){
    // pedimos un numero si el raton esta dentro, si no es un numero no se hace nada
    let num = parseInt(prompt("Introduce un número: "));
    if(isNaN(num)){
        // Lanzamos alert si no es un numero
        alert("El numero no es valido");
        }else{
            // si es un numero comprobamos si es par o impar
            if(num % 2 == 0){
                // mostramos el resultado en el caso de que el numero sea par
                alert("El numero es par");
            }else{
                // mostramos el resultado en el caso de que el numero sea impar
                alert("El numero es impar");
            }
        }
}

// Mostramos mensaje cuando se haga click en mensaje
function mensaje() {
    // alert de que se ha hecho click
    alert("Has hecho un click");
}
// Mostramos mensaje de bienvenida cuando se cargue la pagina
function mensaje2() {
    // alert de bienvenida
    alert("Bienvenidos");
}
// La tenemos que poner fuera para que no sea siempre 0
let contador = 0;
// Contador de clicks
function pulsar() {
    // contador de clicks
    contador++;
    // alert de que se ha pulsado el boton
    alert("Se ha pulsado " + contador);
}

