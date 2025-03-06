
// constantes
const tituloPelicula = document.querySelector(".titulo");
const anyoPelicula = document.querySelector(".anyo");
const duracionPelicula = document.querySelector(".duracion");

// Constante del boton
const boton = document.querySelector(".boton");
boton.addEventListener("click", buscarPelicula);
// Funcion
async function buscarPelicula() {
    const pelicula = document.querySelector(".input1").value;
    const url =`https://www.omdbapi.com/?t=titulo&apikey=6bd47da3${pelicula}`;
    
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Peocesamos la respuesta a un objeto data javascript
    const data = await response.json();

 
    tituloPelicula.innerHTML = `<h3>${data.titulo}</h3>`;
    anyoPelicula.innerHTML = `<h3>${data.anyo}</h3>`;
    // limpiamos antes para que no se repita los tipos
 
    duracionPelicula.innerHTML = `<h3>${data.titulo}</h3>`
    


} catch (error) {
    
    imagenPokemon.src = "";
    duracionPelicula.innerHTML = "";
    anyoPelicula.innerHTML = "";
    tituloPelicula.innerHTML = `<p>No se encontro el pokemon</p>`;
    console.error("Error al obtener datos", error);
}


   
   
    
   
}

























