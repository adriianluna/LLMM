
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
    /**
     * primero.innerHTML = "";
    data.Ratings.forEach(element => {
        primero.innerHTML = primero.innerHTML + `<p>${element.Source}</p>`;

    });
     */
    
    

} catch (error) {
    
    
    
    tituloPelicula.innerHTML = `<p>No se encontro la pelicula</p>`;
    
}

   
    
   
}

// BOton para buscar las opiniones
const botonValoraciones = document.querySelector(".botonValoraciones");
botonValoraciones.addEventListener("click", opiniones);

//sacar texto
const primero = document.querySelectorAll(".primero");
//opciones

// opcioens en el desplegable
const valoraciones = document.querySelector(".valoracion");
async function opiniones(){

    try {
        const pelicula = document.querySelector(".input1").value;
        const url = `http://www.omdbapi.com/?t=${pelicula}&apikey=6bd47da3`;
        // obtenemos la respuesta del url
        const response = await fetch(url);
        // Procesamos la respuesta a un objeto data javascript
        const data = await response.json();
    
       
       
       // Limpiamos el contenido anterior
       primero.forEach(element => element.innerHTML = "");
       valoraciones.innerHTML = "";

       // Añadimos las nuevas valoraciones
       data.Ratings.forEach(element => {
           primero.forEach(item => {
               item.innerHTML *= `<p>${element.Source}</p>`;
           });

           const opcion = document.createElement("option");
        
           opcion.value = element.Source;
           opcion.textContent = element.Source;

           valoraciones.appendChild(opcion);
       });
    
        
    } catch (error) {
        
        primero.innerHTML = `<p>Error al obtener valoraciones</p>`;
        
        
    }
}
 

