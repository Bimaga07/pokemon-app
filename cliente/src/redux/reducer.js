import { GET_NAME_POKEMONS,
     GET_POKEMONS, 
     GET_TYPES, 
     GET_DETAIL, 
     FILTER_CREATED, 
     FILTER_BY_TYPE, 
     ORDER_BY_NAME,
      ORDER_BY_ATTACK,
    ORDER_BY_HP} from "./action-types"

const initialState = {
    pokemons: [],
    pokemonsCopy: [], //aqui guardo ua copia de ellos 
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
        case FILTER_CREATED: 
            let filteredPokemons = [...state.pokemons]
            if(action.payload === 'created'){
                filteredPokemons = state.pokemonsCopy.filter((pokemon) => isNaN(pokemon.id))
            } else if(action.payload === "api"){
                filteredPokemons = state.pokemonsCopy.filter((pokemons) => !isNaN(pokemons.id))
            } else {
                filteredPokemons = state.pokemonsCopy
            }
            //console.log("filtrao", filteredPokemons)
            return{
                ...state,
                pokemons: filteredPokemons
            }
         case FILTER_BY_TYPE:
            
            let filterType;
            if (action.payload === "All") {
                filterType = state.pokemons;
            } else {
                filterType = state.pokemonsCopy.filter((e) =>
                    e.types.includes(action.payload)
                );
            }
            return {
                ...state,
                pokemons: filterType,
            };

         case ORDER_BY_NAME:
            let sortAll = action.payload === "asc"
             ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                     return 1
                  }
                if (b.name > a.name) {
                      return -1
                    }
                     return 0;
                 })
                 : state.pokemons.sort((a, b) => {
                   if (a.name > b.name) {
                         return -1
                     }
                     if (b.name > a.name) {
                          return 1
                       }
                       return 0;
                 })
                return {
                    ...state,
                    pokemons: sortAll
                } 
            case ORDER_BY_ATTACK:
                let sortedAttack = [...state.pokemons];

                if (action.payload === "min") {
                sortedAttack.sort((a, b) => a.attack - b.attack);
                }
                if (action.payload === "max") {
                sortedAttack.sort((a, b) => b.attack - a.attack);
                }
                return {
                ...state,
                pokemons: sortedAttack,
                }; 
            
            case ORDER_BY_HP:
                let sortedHp = [...state.pokemons]

                if (action.payload === "min") {
                sortedHp.sort((a, b) => a.hp - b.hp);
                 }
                 if (action.payload === "max") {
                sortedHp.sort((a, b) => b.hp - a.hp);
                }
                return {
                ...state,
                 pokemons: sortedHp,
             };
   
            default:
                return state
    }
}
export default rootReducer