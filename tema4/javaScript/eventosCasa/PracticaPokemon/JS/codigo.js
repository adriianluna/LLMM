
//constantes
const nombre = document.querySelector(".nombre");
const imagenPokemon = document.querySelector(".imagen");
const altura = document.querySelector(".altura");
const tipos = document.querySelector(".tipos");

const boton = document.querySelector(".boton");

boton.addEventListener("click", buscaPokemon);

async function buscaPokemon() {
    const pokemon = document.querySelector(".input1").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Procesamos la respuesta a un objeto data javascript
    const data = await response.json();


 
    nombre.innerHTML = `<h3>${data.name}</h3>`;

    imagenPokemon.src = `${data.sprites.front_default}`;
    

    altura.innerHTML = `<h3>Altura: ${data.height}</h3>`;
    

    tipos.innerHTML = "";
    data.types.forEach(element => {
        tipos.innerHTML = `<li>${element.type.name}</li>`;
    });

} catch (error) {
    
    
    nombre.innerHTML = `<h3>Error</h3>`;

    imagenPokemon.src = `./assets/error.png`;
    

    altura.innerHTML = `<h3>Error</h3>`;
    

    tipos.innerHTML = `<li>Error</li>`;
    
}
}
