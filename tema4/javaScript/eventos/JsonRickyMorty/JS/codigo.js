
// constantes
const nombre = document.querySelector(".nombre");
const especie = document.querySelector(".especie");
const genero = document.querySelector(".genero");
const imagenPersonaje = document.querySelector(".imagen");
const contadorEpisodios = document.querySelector(".contador");

// Constante del boton
const boton = document.querySelector(".boton");
boton.addEventListener("click", buscarPersonaje);
// Funcion
async function buscarPersonaje() {
    const buscar = document.querySelector(".ricky").value;
    const url = `https://rickandmortyapi.com/api/character/${buscar}`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Procesamos la respuesta a un objeto data javascript
    const data = await response.json();

    

    // Verificamos si la película no fue encontrada
    //if (data.Response === "False") {
      //  throw new Error("");
    //}

 
    nombre.innerHTML = `<h3>${data.name}</h3>`;
    especie.innerHTML = `<h3>${data.species}</h3>`;
    // limpiamos antes para que no se repita los tipos
 
    genero.innerHTML = `<h3>${data.gender}</h3>`;
    if (data.gender == "Female") {
        document.body.style.backgroundColor = "pink";
    }else{
        document.body.style.backgroundColor = "black";
    }
    // Imagen del Json
    imagenPersonaje.src = `${data.image}`;

    contadorEpisodios.innerHTML = data.episode.length;



} catch (error) {
    
    
    especie.innerHTML = `<p>Hola</p>`;
    nombre.innerHTML = `<p>No se encontro el personaje</p>`;
    
}

   
    
   
}

