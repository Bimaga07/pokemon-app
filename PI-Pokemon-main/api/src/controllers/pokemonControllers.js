const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getPokemonsApi = async () => {
    try {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=200")
        
        const pokeApi = await api.data.results //guardo la informacion en una constante para luego mapearla y modificar segun la info de la url
        //console.log(pokeApi);
        const dataPokemon = pokeApi.map(async(pokemon) => {
            const info = await axios.get(pokemon.url);
            const i = info.data;
            return {
                id: i.id,
                name: i.name,
                image: i.sprites.other.home.front_default,
                attack: i.stats[1].base_stat,
                defense: i.stats[2].base_stat,
                speed: i.stats[5].base_stat,
                height: i.height,
                weight: i.weight,
                hp: i.stats[0].base_stat,
                types: i.types.map((e) => e.type.name)
            }
        });
        //console.log(dataPokemon)
        const getAllPokemon = await Promise.all(dataPokemon)
        return getAllPokemon
    } catch(error){
        throw new Error(error.message)
    }
};

const getPokemonsDb = async () => {
    const allPokemonsDb = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
        }
    });
    console.log("allPokemonsDb:", allPokemonsDb);
    
    const mapPoke = allPokemonsDb.map((e) => {
       // console.log("e:", e)
        return {
            id: e.id,
            name: e.name, 
            image: e.image,
            attack: e.attack,
            defense: e.defense,
            speed: e.speed,
            height: e.height,
            weight: e.weight,
            hp: e.hp, //hp?
            types: e.types.map((e) => e.name)    //Types?
        }
    });
    //console.log("mapPoke:", mapPoke)
    return mapPoke;
};

const getAllPokemons = async (name) => {
    
    const pokemonsDb = await getPokemonsDb();
    const pokemonsApi = await getPokemonsApi();
    //const [pokemonsDb, pokemonsApi] = await Promise.all([getPokemonsDb(), getPokemonsApi()]);
    const allPokemons = [...pokemonsDb, ...pokemonsApi];//pokemonsDb.concat(pokemonsApi);
    
    let pokemonName;
    if(name) {
        pokemonName = allPokemons.filter(
            (e) => e.name.toLowerCase().includes(name.toLowerCase())
        );
        if(pokemonName.length) return pokemonName;
        throw new Error("No se encontro ningun pokemon con ese nombre")
    }
    
    return allPokemons
};

const getPokemonById = async (id) => {
    //console.log(id)
    const all = await getAllPokemons();
    const byId = await all.filter((e) => String(e.id) === id);

    if(byId.length) {
        return byId;
    } else {
        throw new Error(`Pokemon no encontrado, id: ${id} incorrecto`)
    }
};

const createPokemon = async (
    name,
    image,
    attack,
    defense,
    speed = null,  //si no se le dan valores , seran nulos por default
    height = null,
    weight=null,
    hp,
    types
    ) => {
        //console.log("name:", name);
        //console.log("types:", types)
    const [pokemon, created] = await Pokemon.findOrCreate({
        where: { name },
        defaults: {
            name,
            image,
            attack,
            defense,
            speed,
            height,
            weight,
            hp,
            types,
            
        }
    });

    if(!created) throw new Error("Este Pokemon ya existe en la Base de Datos");

    const typesDB = await Type.findAll({ where: {name: types} })

    pokemon.addTypes(typesDB);

    return pokemon;
}


module.exports = { 
    createPokemon, 
    getPokemonById,
    getAllPokemons,
    getPokemonsApi,
    getPokemonsDb }