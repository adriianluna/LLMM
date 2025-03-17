
// constantes
const tituloPelicula = document.querySelector(".titulo");
const anyoPelicula = document.querySelector(".anyo");
const duracionPelicula = document.querySelector(".duracion");
//valoraciones
const valoraciones = document.querySelector(".valoracion");

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
    
     // Limpiamos el contenido anterior
     
     valoraciones.innerHTML = "";

     // Añadimos las nuevas valoraciones
     data.Ratings.forEach(element => {
         //MOstramos las valoraciones en el option
        valoraciones.innerHTML += `<option>${element.Source}</option>`;
        
     });
    
    

} catch (error) {
    
    
    
    tituloPelicula.innerHTML = `<p>No se encontro la pelicula</p>`;
    
}

   
    
   
}

// BOton para buscar las opiniones
const botonValoraciones = document.querySelector(".botonValoraciones");
botonValoraciones.addEventListener("click", opiniones);

//opciones
const opinion = document.querySelectorAll(".opinion");

//resultado
const resultado = document.querySelector(".resultadoValoraciones");

// opcioens en el desplegable

async function opiniones() {
    const buscar = document.querySelector(".valoracion").value;
    const url = `http://www.omdbapi.com/?t=${buscar}&apikey=6bd47da3`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Procesamos la respuesta a un objeto data javascript
    const data = await response.json();

    //resultado.innerHTML = `<h3>${data.Value}</h3>`;
    resultado.innerHTML = "";
    
    //resultado.innerHTML = `<h3>${data.Value}</h3>`;

    //const selectedOption = valoraciones.selectedIndex; 
    opinion.forEach(element => {
        //MOstramos las valoraciones en el option
       
       resultado.innerHTML = `<h3>${data.Value[valoraciones.selectedIndex].value}</h3>`;
    });
    
       

    

     

   

} catch (error) {
    
    resultado.innerHTML += `<p>No se encontro el personaje</p>`;
    
}
 
}
