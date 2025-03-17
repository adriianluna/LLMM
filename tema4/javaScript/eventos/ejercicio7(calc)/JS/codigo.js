







// Constantes  ppara los numeros 
const botones = document.querySelectorAll(".boton");

const display = document.querySelector("input");

let primerOperando = "";
let operacion = "";
let segundoOperando = "";



botones.forEach(boton => {
    boton.addEventListener("click", () => {


        if (operacion !== "") {
            segundoOperando += boton.value; 
            document.querySelector("input").value = segundoOperando;
        } else {
            primerOperando += boton.value;
            document.querySelector("input").value = primerOperando;
        }
        // document.querySelector("input").value = primerOperando + operacion + segundoOperando;
    });
});

let op = "";

// COntantes para la suma y eso
const funciones = document.querySelectorAll(".funciones");

funciones.forEach(operacion => {

    operacion.addEventListener("click", ()=> {
        if(primerOperando !== ""){
            cacula(op);
            primerOperando = "";
        }
        op = operacion.value;
    });

});
 

// Boton para borrar el interior del input
const borrar = document.querySelector(".borrar");

let multiplicacion ="";

borrar.addEventListener("click", eliminar);

function eliminar(){

    
    document.querySelector("input").value = "";
    primerOperando = "";
    operacion = "";
    segundoOperando = "";

}

/// Tomamos las funciones
function cacula(op){

    if(funciones.value === "x"){

        document.querySelector("input").value = segundoOperando;
        multiplicacion = primerOperando * segundoOperando;
    }


}

// Boton para ver el resultado
const resultado = document.querySelector(".resultado");

function mostrar(){

    document.querySelector("input").value = multiplicacion;


}















