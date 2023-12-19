import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Cards from '../../components/cards/Cards'
import Nav from '../../components/nav/Nav'
import Paginated from '../../components/paginated/Paginated'
import '../home/home.style.css'
import { getPokemons, getTypes  } from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons)
  
  //const [orden, setOrden] = useState("");  //estado local vacio, q solo lo voy a usar es para cuando yo setee esta pagina me modifique el estado local y se renderice
  const allTypes = useSelector((state) => state.types);
  console.log("All Types:", allTypes);
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
}, [dispatch])

  

    return (
      <div className='home'>

          <Nav />
        <Paginated />
        
        <Cards pokemons={pokemons} />
       
      
        
        
      </div>
    )
  }
  
  export default Home
  