let heroe = "Éxarion";

console.log("Estado del héroe")
console.log("Nombre: " + heroe);

let nivel = 5;

console.log("Nivel: " + nivel);

let puntosVida = 100;

console.log("Puntos de vida: " + puntosVida);

const armaPrincipal = "Espada del Destino";

console.log("Arma secundaria: " + armaPrincipal);

const armaSecundaria = "Arco simple";

console.log("Arma secundaria: " + armaSecundaria);

let tieneArmadura = true;

console.log("Tiene armadura: " + tieneArmadura);

nivel ++;
puntosVida -= 30;

console.log();
console.log("NIvel:" + nivel);
console.log("Nivel:" + puntosVida);
console.log("Arma secundaria: " + armaPrincipal);
console.log("Arma secundaria: " + armaSecundaria);
console.log("Tiene armadura: " + tieneArmadura);

// ejercicio 2

let nivelCadena = nivel.toString();
let puntosFloat = parseFloat(puntosVida);

console.log("Nivel cadena: " + nivelCadena);
console.log("puntos float: " + puntosFloat);

let danyoBase = 50;
let multCritico = 2 ;
let probCritico = 0.5;
let esCritico = probCritico > Math.random();

let variable=esCritico ? danyoBase * multCritico : danyoBase;
console.log("El heroe inflinge " + danyoBase + " puntos de daño porque es critico tiene valor " + esCritico);





