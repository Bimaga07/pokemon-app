import { GET_POKEMONS,GET_TYPES } from "./action-types"

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    types: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                pokemonsCopy: action.payload
            }
            
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

            default:
                return {...state}
    }
}
export default rootReducer