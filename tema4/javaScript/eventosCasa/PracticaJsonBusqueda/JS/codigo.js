
// constantes
const tituloPelicula = document.querySelector(".titulo");
const anyoPelicula = document.querySelector(".anyo");
const duracionPelicula = document.querySelector(".duracion");
//valoraciones
//Select
const valoraciones = document.querySelector(".valoracion");

// Constante del boton buscar
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
    
     
     
     valoraciones.innerHTML = "<option value=''>Selecciona una valoración</option>";

     // Añadimos las nuevas valoraciones
     data.Ratings.forEach(element => {
         //MOstramos las valoraciones en el option
        valoraciones.innerHTML += `<option>${element.Source}</option>`;
       
     });
    
    

} catch (error) {
    // Parrafo abajo del todo
    resultado.innerHTML = `<p>No se encontro la pelicula</p>`;
    //tituloPelicula.innerHTML = `<p>No se encontro la pelicula</p>`;
}

   
    
   
}

// Boton para buscar las opiniones
//Segundo boton
const botonValoraciones = document.querySelector(".botonValoraciones");
//Parrafo abajo del todo
const resultado = document.querySelector(".resultadoValoraciones");


botonValoraciones.addEventListener("click", mostrarValoracion);

async function mostrarValoracion() {
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
    
    
         // Añadimos las nuevas valoraciones
         data.Ratings.forEach(element => {
             //MOstramos las valoraciones en el option

            if(element.Source === valoraciones.value){
                 resultado.innerHTML = `<p>La valoracion es: ${element.Value}</p>`;
            }
               
            

            
            
         });
        
        
    
    } catch (error) {
        
        
        resultado.innerHTML = `<p>No se encontro la opinion</p>`;
        
    }
}



//const nuevaOpcion = document.createElement("option");
//select.appendChild(nuevaOpcion);