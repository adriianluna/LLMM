const p1 = document.querySelector(".dblclick");
const b = document.querySelector(".alert");
const b2 = document.querySelector("body");
const p2 = document.querySelector(".cursor");
const botom = document.querySelector(".buttom");

p1.addEventListener("dblclick",() => alert("Parrafo 2 click"));
b.addEventListener("click",(mensaje));
b2.addEventListener("load",mensaje());
p2.addEventListener("dblclick",() => alert("Parrafo 2 click"));
botom.addEventListener("botom",(pulsar));

function mensaje() {
    alert("Pagina cargada");
}

function pulsar() {
    let contador = 0;
    contador++;
    alert("Se ha pulsado " + contador);
}

