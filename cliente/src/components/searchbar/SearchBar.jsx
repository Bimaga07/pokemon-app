import  "../searchbar/searchabar.style.css"
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../../redux/action';

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const handleInputChage = (event) => {
       event.preventDefault()
        setName(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(getNamePokemons(name)) 
    }

      
        
        
    return(
        <div className='serbach'>

        <input className="inputer"
        type='text'
        placeholder='Busca el pokemon'
        onChange={(event) => handleInputChage(event)}
        >
            
       </input>
       <button type='submit'
       onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>
    )
}
export default SearchBar