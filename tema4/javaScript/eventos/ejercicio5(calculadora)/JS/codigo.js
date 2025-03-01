
// Introduccion del numero 1
const num1 = document.querySelector(".numero1");
const numeroIntroducido1 = document.querySelector(".input1");


// Introduccion numero 2
const num2 = document.querySelector(".numero2");
const numeroIntroducido2 = document.querySelector(".input2");



// resultado
const resultado = document.querySelector(".inputResultado");

// Boton
const boton = document.querySelector(".boton");
boton.addEventListener("click", opciones);

// Opciones de calculo
function opciones() {
    const operacion = document.querySelector(".opciones").value;
    if (operacion === "Suma") {
        suma();
    } else if (operacion === "Resta") {
        resta();
    } else if (operacion === "Multiplicacion") {
        multiplicacion();
    } else if (operacion === "Division") {
        division();
    }
}
// Para imprimir el error en caso de que no se introduzcan numeros
const error = document.querySelector(".error");
// Funcion suma
function suma() {
    if (isNaN(numeroIntroducido1.value) || isNaN(numeroIntroducido2.value)) {
        error.textContent = "Introduce un número";
        
    }
    let numero1 = parseFloat(numeroIntroducido1.value);
    let numero2 = parseFloat(numeroIntroducido2.value);
    let suma = numero1 + numero2;

    resultado.value = suma;
}
function resta(){
   
    if(isNaN(numeroIntroducido1.value) || (isNaN(numeroIntroducido2.value))){
        error.textContent = "Introduce un número";
    }
    
    let numero1 = parseFloat(numeroIntroducido1.value);
    let numero2 = parseFloat(numeroIntroducido2.value);
    let resta = numero1 - numero2;

    resultado.value = resta;
}
function multiplicacion(){
    
    if(isNaN(numeroIntroducido1.value) || (isNaN(numeroIntroducido2.value))){
          
        error.textContent = "Introduce un número";
    }
    let numero1 = parseFloat(numeroIntroducido1.value);
    let numero2 = parseFloat(numeroIntroducido2.value);
    let multiplicacion = numero1 * numero2;

    resultado.value = multiplicacion;
}
function division(){
    
    if(isNaN(numeroIntroducido1.value) || (isNaN(numeroIntroducido2.value))){
        error.textContent = "Introduce un número";

    }else if(numeroIntroducido2.value == 0){
        error.textContent = "No se puede dividir entre 0";
    }

    let numero1 = parseFloat(numeroIntroducido1.value);
    let numero2 = parseFloat(numeroIntroducido2.value);
    let division = numero1 / numero2;

    resultado.value = division;
}



