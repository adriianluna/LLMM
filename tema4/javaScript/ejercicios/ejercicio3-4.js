let dificultad = 3;
let nivel = 0;
let expActual = 100;
let expGanada = 30;
let expNecesaria = 100;
expActual += expGanada;
// hacemos un if para decir que hemos subido de nivel
if(expActual >= expNecesaria){
    nivel++;
    expActual  -= expNecesaria;
    console.log("Has subido de nivel eres nivel: " + nivel);
    
}

if(dificultad ==  1){
    console.log("Nivel de dificultad 1. novato. Tu experiencia es: "  + expActual);

}else if(dificultad == 2){
    console.log("Nivel de dificultad 2. Media Tu experiencia es: "  + expActual);
}else{
    console.log("Nivel de dificultad 3. Profesional Tu experiencia es: "  + expActual);
}


// ejercicio 4

let monedas = [2, 4, 5, 6];

let atuendos = ["Duende", "Arquero","Caballero"];

let sumaMonedas  = 0;

for(let elemento of monedas){
    sumaMonedas += elemento;
}
atuendos.push("Mago");
atuendos.forEach((dato, indice) => { 
    console.log(indice + ":" + dato); 
}
);



console.log("La suma de monedas es: " + sumaMonedas);

// ejercicio 5

let puntosActuales = 22;
let cura = 30;

function curar(puntosActuales, cura) {
    return Math.min(puntosActuales + cura, 100);
}
 
puntosTotales = curar(puntosActuales,cura);

console.log( "Tienes " + puntosActuales + " puntos actuales y con la cura tienes una vida de " + puntosTotales);


