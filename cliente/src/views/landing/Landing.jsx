import '../landing/landing.style.css'
import {Link} from 'react-router-dom'
import pokeballLogo from '../../imagenes/pokeballLogo.png'
const Landing = () =>{

    return (
        <div className='landing'>
            <button className='poke'> 
                <Link to='/home'>
                    <img src={pokeballLogo} alt="pokeball" />

                </Link>
            </button>
        </div>
    )
}
export default Landing