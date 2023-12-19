import '../landing/landing.style.css'
import {Link} from 'react-router-dom'

const Landing = () =>{

    return (
        <div className='landing'>
                <Link to='/home'>
            <button> ingresar

            </button>
                </Link>
        </div>
    )
}
export default Landing