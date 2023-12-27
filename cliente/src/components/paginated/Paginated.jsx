import '../paginated/paginated.style.css'

const Paginated = ({pokemonsPerPage, pokemons, paginado}) =>{
    const pageNumber = []
    for (let i = 0; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
        pageNumber.push(i + 1);
    }
    return(
        <nav >
        <ul className='paginated'>
            {pageNumber && pageNumber.map(number => (
                <li  key = { number }  style={{ listStyle: "none" }} >
                <button className='buttonP' onClick={() => paginado(number)}>{number} </button>
                </li>
            ))} 
    </ul>
    </nav >
    )
}
export default Paginated