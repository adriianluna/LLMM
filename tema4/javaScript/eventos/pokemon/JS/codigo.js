
// constantes
const nombrePokemon = document.querySelector(".nombre");
const imagenPokemon = document.querySelector(".imagen");
const alturaPokemon = document.querySelector(".altura");
const tipoPokemon = document.querySelector(".tipos");

// Constante del boton
const boton = document.querySelector(".boton");
boton.addEventListener("click", bucarPokemon);
// Funcion
async function bucarPokemon() {
    const pokemon = document.querySelector(".input1").value;
    const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
try {
    // obtenemos la respuesta del url
    const response = await fetch(url);
    // Peocesamos la respuesta a un objeto data javascript
    const data = await response.json();

    nombrePokemon.innerHTML = `<h3>${data.name}</h3>`;
    imagenPokemon.src = `${data.sprites.front_default}`;
    alturaPokemon.innerHTML = `<h3>${data.height}</h3>`;
    data.types.forEach(element => {
        tipoPokemon.innerHTML = tipoPokemon.innerHTML + `<li>${element.type.name}</li>`;

    });


} catch (error) {
    
    imagenPokemon.src = "";
    tipoPokemon.innerHTML = "";
    alturaPokemon.innerHTML = "";
    nombrePokemon.innerHTML = `<p>No se encontro el pokemon</p>`;
    console.error("Error al obtener datos", error);
}

}

























