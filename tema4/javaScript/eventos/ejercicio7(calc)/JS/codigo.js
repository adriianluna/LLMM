



//input
const display = document.querySelector("input"); 



// Variables para almacenar los operandos
let primerOperando = "";
let operacion = "";
let segundoOperando = "";


// Botones de números
const botones = document.querySelectorAll(".boton"); 
botones.forEach((element) => {
    element.addEventListener("click", () => {
        if (operacion !== "") {
            segundoOperando += element.textContent;
            display.value = segundoOperando;
        } else {
            primerOperando += element.textContent;
            display.value = primerOperando;
        }
    });
});

// Función operación matemática
function opcionesCalcular(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num1;
    }
}
//Botones de calculo
const funciones = document.querySelectorAll(".funciones"); 
// Funcion para los botones de operaciones
funciones.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (primerOperando !== "" && segundoOperando === "") {
            // Guardar la operación 
            operacion = boton.textContent; 
            // Esperamos a que introduzca el segundo operando
            esperandoSegundoOperando = true; 
            // Mostramos operación
            display.value = primerOperando + " " + operacion; 
        }
    });
});
// Boton para mostrar el resultado
const botonResultado = document.querySelector(".resultado");
// Resultado
botonResultado.addEventListener("click", () => {
    if (primerOperando !== "" && segundoOperando !== "" && operacion !== "") {
        let resultado = opcionesCalcular(
            parseFloat(primerOperando),
            parseFloat(segundoOperando),
            operacion
        );
        // Mostrar resultado
        display.value = resultado;
        // Guardar el resultado para futuras operaciones
        primerOperando = resultado.toString(); 
        segundoOperando = "";
        operacion = "";
        esperandoSegundoOperando = false;
    }
});
//Borrar el input y poner 0
const borrar = document.querySelector(".borrar"); 
// Borrar
borrar.addEventListener("click", () => {
    primerOperando = "";
    segundoOperando = "";
    operacion = "";
    esperandoSegundoOperando = false;
    //Poner 0 en el input
    display.value = "0"; 
});
