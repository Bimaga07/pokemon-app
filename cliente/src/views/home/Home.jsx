import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Paginated from '../../components/paginated/Paginated'
import Card from '../../components/card/Card';
import { filterCreated, getPokemons, getTypes, filterByType, orderByName, orderByAttack, orderByHp } from '../../redux/action';

import '../home/home.style.css'

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
  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes());
  }, [dispatch])

  //filtros
  
  const handleCreated = (event) => {
    dispatch(filterCreated(event.target.value))
    setCurrent(1)
  }
  const handleFilterTypes = (e) => {
    e.preventDefault();
    if (e.target.value !== "Tipos") {
        dispatch(filterByType(e.target.value));
    }
    setCurrent(1);
  };

  const handleSort = (event) => {
    event.preventDefault()
    dispatch(orderByName(event.target.value))
    setCurrent(1);   //cuando hago el ordenamiento, le pido q me setee en la pagina 1
    setOrden(`Ordenado ${event.target.value}`)
}

const handleSortAttack = (e) => {
  e.preventDefault();
  if (e.target.value !== "attack") dispatch(orderByAttack(e.target.value));
  setCurrent(1);
  setOrden(`Ordenado ${e.target.value}`);
};

const handleSortHp = (e) => {
  e.preventDefault();
  if (e.target.value !== "jp") dispatch(orderByHp(e.target.value));
  setCurrent(1);
  setOrden(`Ordenado ${e.target.value}`);

}
const handleClick = (e) => {
  e.preventDefault();
  dispatch(getPokemons());
}

    return (
      <div className='home'>
         <button  onClick={(e) => { handleClick(e)}} >
                <span>⟳</span> Recargar Pokémon
                </button>
        <select  onChange={(event) => handleSortHp(event)}>
                    <option value="hp">Hp</option>
                    <option value="min">min</option>
                    <option value="max">max</option>
                </select>

        <select onChange={e => handleSortAttack(e)}>
                    <option value="attack">Ataque</option>
                    <option value="min">min</option>
                    <option value="max">max</option>
                </select>



          <select  onChange={(event) => handleSort(event)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>



          <select  onChange={(e) => handleFilterTypes(e)}>
                    <option>Tipos</option>
                    <option value="All">Todos</option>
                    {allTypes?.map((e) => {
                        return (
                            <option key={e.id} value={e.name}>
                                {e.name}
                            </option>
                        );
                    })}
        </select>
        <select  onChange={event => handleCreated(event)}>
                    <option value="All">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Api</option>
                </select>
          
        <Paginated  pokemonsPerPage={pokemonsPerPage}
                pokemons={pokemons.length}
                paginado={paginado}  />
        
       
        <div className='cards'>


        {currentPokemons?.map((elem, index) => {
                //console.log("Current Pokemons:", currentPokemons);
                return (
                    <Link key={index} to={`/detail/${elem.id}`} className='linktext'>
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
  