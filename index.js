//A. OBTNER DETALLES DE UN POKEMON POR NOMBRE

async function getPokemonDetails(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        console.log(data); // Detalles del Pokémon
    } catch (error) {
        console.error("Error obteniendo detalles del Pokémon", error);
    }
}

//getPokemonDetails("pikachu"); // Ejemplo con Pikachu


//B. OBTNER HABILIDADES DE UN POKEMON ESPECIFICO

async function getPokemonAbilities(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        const abilities = data.abilities.map(ability => ability.ability.name);
        console.log(abilities); // Lista de habilidades
    } catch (error) {
        console.error("Error obteniendo habilidades del Pokémon", error);
    }
}

//getPokemonAbilities("charizard"); // Ejemplo con Charizard

//C. OBTENER INFORMACION SOBRE UN TIPO ESPECIFICO DE POKEMON (P.E. AGUA) 

async function getPokemonByType(type) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        console.log(data); // Detalles del tipo de Pokémon
    } catch (error) {
        console.error("Error obteniendo detalles del tipo de Pokémon", error);
    }
}               

//getPokemonByType("water"); // Ejemplo con tipo agua

//D. OBTENER UNA LISTA DE LOS PRIMEROS 50 POKEMONES
async function getFirst50Pokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();
        console.log(data.results); // Lista de los primeros 50 Pokémon
    } catch (error) {
        console.error("Error obteniendo la lista de Pokémon", error);
    }
}

//getFirst50Pokemon();

//2. IMPLEMENTACION DE UNA INTERFAZ SIMPLE PARA BUSCAR Y MOSTRAR UN POKEMON POR SU NOMBRE

async function searchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const detailsContainer = document.getElementById("pokemonDetails");

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            detailsContainer.innerHTML = `<p>Pokémon no encontrado</p>`;
            return;
        }
        const data = await response.json();

        // Mostrar detalles del Pokémon
        detailsContainer.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <p><strong>Altura:</strong> ${data.height} m</p>
            <p><strong>Peso:</strong> ${data.weight} kg</p>
            <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">

        `;
    } catch (error) {
        detailsContainer.innerHTML = `<p>Error buscando Pokémon</p>`;
        console.error("Error buscando Pokémon", error);
    }
}