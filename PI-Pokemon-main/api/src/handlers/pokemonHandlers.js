const { createPokemon, 
    getPokemonById,
    getAllPokemons,} = require('../controllers/pokemonControllers')


const getPokemonsHandler = async (req, res) => {
const {name} = req.query;
try {
    if(name){
        const response = await getAllPokemons(name);
        return res.status(200).json(response)
    }
        const response = await getAllPokemons();
        res.status(200).json(response)
} catch (error) {
    res.status(400).json({error: error.message})
}

}

const getPokemonByIdHandler = async (req, res) => {
const {id} = req.params;
try {
    const response = await getPokemonById(id)
    res.status(200).json(response)
} catch (error) {
    res.status(400).json({error: error.message})
}

}


const createPokemonHandler = async (req, res) => {
const {
    name,
    image,
    attack,
    defense,
    speed = null,  
    height = null,
    weight=null,
    hp,
    types,
    } = req.body; 
try {
    const newPokemon = await createPokemon(
        name,
        image,
        attack,
        defense,
        speed,  
        height,
        weight,
        hp,
        types,
    );
    res.status(200).json(newPokemon) //"Creado Exitosamente"
} catch (error) {
    res.status(400).json({error: error.message})
}
}

module.exports = {getPokemonByIdHandler, 
getPokemonsHandler, 
createPokemonHandler}