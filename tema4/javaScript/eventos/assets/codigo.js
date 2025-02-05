const p1 = document.querySelector(".nidea");
const b = document.querySelector("body");
const p2 = document.querySelector("#nidea2");

p1.addEventListener("click",() => alert("Parrafo 1 click"));
b.addEventListener("load",mensaje);
p2.addEventListener("dblclick",() => alert("Parrafo 2 click"));

function mensaje() {
    alert("Pagina cargada");
}
    

