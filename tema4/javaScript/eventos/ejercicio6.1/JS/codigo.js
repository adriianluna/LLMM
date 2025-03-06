
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
    const url = `http://www.omdbapi.com/?t=${pelicula}&apikey=6bd47da3`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Procesamos la respuesta a un objeto data javascript
    const data = await response.json();

    // Verificamos si la película no fue encontrada
    if (data.Response === "False") {
        throw new Error("");
    }

 
    tituloPelicula.innerHTML = `<h3>${data.Title}</h3>`;
    anyoPelicula.innerHTML = `<h3>${data.Year}</h3>`;
    // limpiamos antes para que no se repita los tipos
 
    duracionPelicula.innerHTML = `<h3>${data.Runtime}</h3>`;
    


} catch (error) {
    
    
    
    tituloPelicula.innerHTML = `<p>No se encontro la pelicula</p>`;
    
}

   
    
   
}

