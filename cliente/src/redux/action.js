import axios from 'axios'
import { GET_POKEMONS } from './action-types'

export const getPokemons  = () =>{
    return async (dispatch) =>{
        const apiData = await axios.get('http://localhost:3001/pokemons')
        const poke = apiData.data
        dispatch({
            type: GET_POKEMONS,
            paylod: pokemons
        })
    }
}