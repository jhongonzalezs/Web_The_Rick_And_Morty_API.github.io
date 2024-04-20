// Función para obtener y mostrar los datos del personaje seleccionado
function WebApi(personajeId) {
    // URL de la API de Rick and Morty para obtener datos de un personaje específico
    const url = `https://rickandmortyapi.com/api/character/${personajeId}`;

    // Realizar la solicitud a la API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la información del servidor.");
            }
            return response.json();
        })
        .then(character => {
            // Generar el HTML de la tarjeta del personaje
            const cardHTML = `
          <div class="card">
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Especie: ${character.species}</p>
              <p class="card-text">Estado: ${character.status}</p>
            </div>
          </div>
        `;
            // Mostrar la tarjeta del personaje en el contenedor correspondiente
            document.getElementById('tarjetaPersonaje').innerHTML = cardHTML;
        })
        .catch(error => console.error("Error al obtener los datos del personaje:", error));
}

// Función para cargar las opciones del select con los nombres de los personajes y generar las tarjetas de los personajes
function cargarOpciones() {
    const select = document.getElementById('personaje');
    const tarjetaPersonaje = document.getElementById('tarjetaPersonaje');
  
    // URL de la API de Rick and Morty para obtener datos de los personajes
    const url = "https://rickandmortyapi.com/api/character/?page=10";
  
    // Realizar la solicitud a la API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la información del servidor.");
        }
        return response.json();
      })
      .then(data => {
        // Construir las opciones del select basadas en los nombres de los personajes
        data.results.slice(0, 15).forEach(character => {
          const option = document.createElement('option');
          option.value = character.id;
          option.textContent = character.name;
          select.appendChild(option);
  
          // Generar la tarjeta del personaje
          const cardHTML = `
            <div class="card" id="card-${character.id}">
              <img src="${character.image}" class="card-img-top" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Especie: ${character.species}</p>
                <p class="card-text">Estado: ${character.status}</p>
              </div>
            </div>
          `;
          tarjetaPersonaje.innerHTML += cardHTML;
        });
      })
      .catch(error => console.error("Error al obtener los datos de los personajes:", error));
  }

// Función para cargar todas las opciones posibles del select con los nombres de los personajes y generar las tarjetas de los personajes
/*async function cargarOpciones() {
    const select = document.getElementById('personaje');
    const tarjetaPersonaje = document.getElementById('tarjetaPersonaje');
  
    // URL base de la API de Rick and Morty para obtener datos de los personajes
    const baseUrl = "https://rickandmortyapi.com/api/character/";
  
    try {
      let allCharacters = [];
  
      // Realizar varias solicitudes a la API para obtener más personajes
      for (let i = 1; i <= 10; i++) { // Realizar 3 solicitudes, cada una devuelve 20 personajes
        const url = `${baseUrl}?page=${i}`;
        const response = await fetch(url);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results]; // Unir los resultados de las solicitudes
      }
  
      // Construir las opciones del select y generar las tarjetas de los personajes
      allCharacters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id;
        option.textContent = character.name;
        select.appendChild(option);
  
        // Generar la tarjeta del personaje
        const cardHTML = `
          <div class="card" id="card-${character.id}">
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Especie: ${character.species}</p>
              <p class="card-text">Estado: ${character.status}</p>
            </div>
          </div>
        `;
        tarjetaPersonaje.innerHTML += cardHTML;
      });
    } catch (error) {
      console.error("Error al obtener los datos de los personajes:", error);
    }
  }*/

  
  // Función para ocultar todas las tarjetas excepto la del personaje seleccionado
  function WebApi(personajeId) {
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
      if (tarjeta.id === `card-${personajeId}`) {
        tarjeta.style.display = 'block'; // Mostrar la tarjeta del personaje seleccionado
      } else {
        tarjeta.style.display = 'none'; // Ocultar las demás tarjetas
      }
    });
  }


// Función para mostrar todas las tarjetas al seleccionar "Seleccionar personaje"
function mostrarTodasTarjetas() {
    const tarjetas = document.querySelectorAll('.card');
  
    // Mostrar todas las tarjetas
    tarjetas.forEach(tarjeta => {
      tarjeta.style.display = 'block';
    });
  }

  
  
  // Llamar a la función para cargar las opciones del select y generar las tarjetas de los personajes al cargar la página
  cargarOpciones();
  