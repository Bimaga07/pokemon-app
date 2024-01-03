import {Link} from 'react-router-dom'
import SearchBar from '../searchbar/SearchBar'
import '../nav/nav.style.css'

const Nav = () =>{
    return (
        <div className='navCont'>
        <Link to='/home' className='link' > Home
        </Link>
           <SearchBar/>
        <Link to='/create'> Created
        </Link>
        </div>

        
    )
}
export default Nav