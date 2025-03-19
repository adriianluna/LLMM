

//constantes
const latin = document.querySelector(".latin");
//Definicion
const definicion = document.querySelector(".definicion");
//errror
const fallo = document.querySelector(".error")
// boton para buscar
const boton = document.querySelector(".boton");

boton.addEventListener("click", mostrarDefinicion);

async function mostrarDefinicion() {
    // input
    const textoBuscar = document.querySelector(".input1").value;
    const url = `https://rae-api.com/api/words/${textoBuscar}`;
    
    try {
        // obtenemos la respuesta del url
        const response = await fetch(url);
        // Procesamos la respuesta a un objeto data javascript
        const data = await response.json();
    
        // Verificamos si la película no fue encontrada
        
        
        latin.innerHTML = "";
        definicion.innerHTML = "";
        fallo.innerHTML = "";
         

         data.data.meanings.forEach(element =>  {
            latin.innerHTML = `<h3>${element.origin.raw}</h3>`;
         })
         data.data.meanings.forEach(element => {
            
            element.senses.forEach(item => {
            definicion.innerHTML += `<li>${item.raw}</li>`;
            });

           
            
         });
        
    
    } catch (error) {
        
        
        fallo.innerHTML = `<h3>No se encontro la palabra</h3>`;
        
    }
}
