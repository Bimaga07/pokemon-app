import { GET_POKEMONS } from "./action-types"

const initialState = {
    pokemon: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.paylod
            }
    }
}
export default rootReducer