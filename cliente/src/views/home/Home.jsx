import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Paginated from '../../components/paginated/Paginated'
import '../home/home.style.css'
import { getPokemons, getTypes  } from '../../redux/action';
//import Cards from '../../components/cards/Cards';
import Card from '../../components/card/Card';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons)
  
  const [orden, setOrden] = useState("");  //estado local vacio, q solo lo voy a usar es para cuando yo setee esta pagina me modifique el estado local y se renderice
  const allTypes = useSelector((state) => state.types);
  
  const [current, setCurrent] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = current * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
 
  const paginado = (pageNumber) => {
    setCurrent(pageNumber);
  }


  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
}, [dispatch])

  

    return (
      <div className='home'>

          
        <Paginated  pokemonsPerPage={pokemonsPerPage}
                pokemons={pokemons.length}
                paginado={paginado}  />
        
       
        <div className='cards'>


        {currentPokemons?.map((elem, index) => {
                //console.log("Current Pokemons:", currentPokemons);
                return (
                    <Link key={index} to={`/detail/${elem.id}` } >
                        <Card
                            name={elem.name}
                            hp={elem.hp}
                            attack={elem.attack}
                            image={elem.image}
                            id={elem.id}
                            types={elem.types}
                            key={index}
                        />
                    </Link>
                )
            })}
        </div>
        
        
      </div>
    )
  }
  
  export default Home
  