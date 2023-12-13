import { GET_POKEMONS } from "./action-types"

const initialState = {
    pokemon: [],
}

const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.paylod
            }
    }
}
export default Reducer