import axios from 'axios'
import { GET_NAME_POKEMONS, 
        GET_POKEMONS, 
        GET_TYPES, 
        GET_DETAIL, 
        FILTER_CREATED,
        FILTER_BY_TYPE, 
        ORDER_BY_NAME,
        ORDER_BY_ATTACK,
        ORDER_BY_HP } from './action-types'

export const getPokemons = () => {
    return  async (dispatch) => {
        try {
            
            const apiData = await axios.get(`http://localhost:3001/pokemons`);  //https://pokeapi.co/api/v2/pokemon/?offset=200&limit=200
           //console.log("API Data:", apiData)
            const pokemons = apiData.data;
           // console.log("Pokemons:", pokemons);
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons
            })
          
        } catch (error) {
            console.log(error);
        }
    }
}
//GET TYPES
export const getTypes = () => {
    return async (dispatch) => {
        const info = await axios.get(`http://localhost:3001/types`, {});
        return dispatch({ type: GET_TYPES, payload: info.data });
    };
};
//ORDENAMIENTO POR NOMBRE(SEARCHBAR)
export const getNamePokemons = (name) => {
    return async  (dispatch) => {
        try {
            if(!name.trim()){
                alert('nombre vacio')
                return
            }
            const response = await axios(
                `http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: response.data
           
            })  
        } catch (error) {
            console.log('que llega', response);
            console.log(error);
           
        }
    }
}
//TARER POR ID EN EL DETAIL 
  export const getDetail = (id) => {
   return async (dispatch) =>{
    try {
        const  response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    } catch (error) {
       
       console.log(error);
    }

   }
} 

export const getCreated = (newPokemon) =>{
    return async (dispatch) =>{
        try {
            const response = await axios.post(`http://localhost:3001/pokemons`, newPokemon)
            alert('pokemon creado correctamente')
          console.log("RESPONSE:", response)
            return response
        } catch (error) {
            console.log(error);
            
        }
    }

}
//FILTRO POR CREADO EN DB O EN API
export const filterCreated = (payload) => {console.log(payload)
    return {
        type: FILTER_CREATED,
        payload
    }
    
}
//FILTRO POR TIPOS
export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload,
    };
};
//ORDENAMIENTO POR NOMBRE(ALFABETICO en la Home)
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}
//ORDENAMIENTO POR ATAQUE
export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}
//ORDENAMIENTO POR HP
export const orderByHp = (payload) => {
    return {
        type: ORDER_BY_HP,
        payload
    }
}