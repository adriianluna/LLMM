
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
const error = document.querySelector(".error");
boton.addEventListener("click", suma);


// FUncion suma
function suma(){
    error.textContent = "";
    if(isNaN(numeroIntroducido1) || (isNaN(numeroIntroducido2))){
          

    }
    let numero1 = parseFloat(numeroIntroducido1.value);
    let numero2 = parseFloat(numeroIntroducido2.value);
    let suma = numero1 + numero2;

    resultado.value = suma;
}

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




