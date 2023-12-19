import axios from 'axios'
import { GET_POKEMONS, GET_TYPES } from './action-types'

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
export const getNamePokemons = (name) =>{
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/pokemons?name${name}`)
        
    }
}