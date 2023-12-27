import axios from 'axios'
import { GET_NAME_POKEMONS, GET_POKEMONS, GET_TYPES, GET_DETAIL } from './action-types'

export const getPokemons = () => {
    return  async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/pokemons");  //https://pokeapi.co/api/v2/pokemon/?offset=200&limit=200
       // console.log("API Data:", apiData)
        const pokemons = apiData.data;
       // console.log("Pokemons:", pokemons);
        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
      
    }
}
//GET TYPES
export const getTypes = () => {
    return async (dispatch) => {
        let info = await axios.get("http://localhost:3001/types", {});
        return dispatch({ type: GET_TYPES, payload: info.data });
    };
};
//ORDENAMIENTO POR NOMBRE(SEARCHBAR)
export const getNamePokemons = (name) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(
                `http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: response.data
            })  
        } catch (error) {
            console.log(error);
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: { error: error },
            });
        }
    }
}
//TARER POR ID EN EL DETAIL 
 export const getDetail = (id) => {
   return async (dispatch) =>{
    try {
        let response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    } catch (error) {
       console.log(error);
    }

   }

}