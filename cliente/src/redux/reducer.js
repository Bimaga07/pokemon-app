import { GET_NAME_POKEMONS, GET_POKEMONS, GET_TYPES, GET_DETAIL} from "./action-types"

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    types: [],
    detail: {}
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
        case GET_NAME_POKEMONS:
            if(action.payload.error){
                return {
                    ...state,
                    pokemons: [],
                    notFound: true
                }
            }else{
                return {
                    ...state,
                    pokemons: action.payload,
                    notFound: false
                }
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
               
            default:
                return {...state}
    }
}
export default rootReducer