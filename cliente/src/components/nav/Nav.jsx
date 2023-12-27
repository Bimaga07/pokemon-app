import {Link} from 'react-router-dom'
import SearchBar from '../searchbar/SearchBar'
import '../nav/nav.style.css'

const Nav = () =>{
    return (
       <div>
        <Link to='/home'> Home
        </Link>
        <Link to='/create'> Created
        </Link>
        <div>

        <SearchBar/>
        </div>
       </div>
    )
}
export default Nav