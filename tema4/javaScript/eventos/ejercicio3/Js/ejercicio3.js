const p1 = document.querySelector(".dblclick");
const b = document.querySelector(".alert");
const b2 = document.querySelector("body");
const p2 = document.querySelector(".cursor");
const boton = document.querySelector(".button");
const robot = document.querySelector(".robot");
const ninja = document.querySelector(".tortuga");
const cursor = document.querySelector(".cursor");

p1.addEventListener("dblclick",() => alert("Parrafo 2 click"));
b.addEventListener("click",(mensaje));
b2.addEventListener("load",mensaje2());
p2.addEventListener("dblclick",() => alert("Parrafo 2 click"));
boton.addEventListener("click",(pulsar));
robot.addEventListener("click",(numeroMayorMenor));
// tortuga ninja
ninja.addEventListener("mouseleave",(caclulaParImpar));
cursor.addEventListener("mouseenter",(calculaMultiplicacion));

function calculaMultiplicacion(){

    let num1 = parseInt(prompt("Introduce un número: "));
    let num2 = parseInt(prompt("Introduce un número: "));
    if( isNaN(num1) &&  isNaN(num2)){
        alert("Los numeros no son validos");
    }else{
        let multiplicacion = num1 * num2;
        alert("La multiplicacion de " + num1  + " y " + + num2 + " es " + multiplicacion);
    }

}

function numeroMayorMenor(){
 
    let num1 = parseInt(prompt("Introduce un número: "));
    let num2 = parseInt(prompt("Introduce un número: "));
    if( isNaN(num1) &&  isNaN(num2)){
        alert("los numeros no son validos");
        }else{
            if(num1 > num2){
                alert("El " + num1 + " es mayor");
            }else if(num1 == num2){
                alert("Los numeros son iguales");
            }else{
                alert("El " + num2 + " es mayor");
            }
       } 
       
    

}

function caclulaParImpar(){
    let num = parseInt(prompt("Introduce un número: "));
    if(num % 2 == 0){
        alert("El numero es par");
    }else{
        alert("El numero es impar");
    }
}


function mensaje() {
    alert("Has hecho un click");
}

function mensaje2() {
    alert("Bienvenidos");
}
// La tenemos que poner fuera para que no sea siemrpe 0
let contador = 0;
function pulsar() {
    
    contador++;
    alert("Se ha pulsado " + contador);
}

