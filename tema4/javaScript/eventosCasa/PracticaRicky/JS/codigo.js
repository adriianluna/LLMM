



//constantes
const nombre = document.querySelector(".nombre");
const imagen = document.querySelector(".imagen");
const especie = document.querySelector(".especie");
const genero = document.querySelector(".genero");
const episodios = document.querySelector(".contador");
const body = document.querySelector("body");

const boton = document.querySelector(".boton");

boton.addEventListener("click", buscarPelicula);

async function buscarPelicula() {
    const personaje = document.querySelector(".ricky").value;
    const url = `https://rickandmortyapi.com/api/character/${personaje}`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Procesamos la respuesta a un objeto data javascript
    const data = await response.json();


 
    nombre.innerHTML = `<h3>${data.name}</h3>`;

    imagen.src = `${data.image}`;
    

    especie.innerHTML = `<h3>Especie: ${data.species}</h3>`;
    

    genero.innerHTML = `<h3>Especie: ${data.gender}</h3>`;
    
    episodios.innerHTML = `<h3>Episodios: ${data.episode.length}</h3>`;

    
    if (data.gender == "Female") {
        document.body.style.color = "pink";
    }else{
        document.body.style.color = "white";
    }

} catch (error) {
    
    
    nombre.innerHTML = `Error`;

    imagen.src = ``;
    

    especie.innerHTML = `Error`;
    

    genero.innerHTML = `Error`;
    
}
}



