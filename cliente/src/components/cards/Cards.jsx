import '../cards/cards.style.css'
import Card from "../card/Card"


const Cards = ({pokemons}) =>{
   const pokeList = pokemons
    
   return (
    <div className='cards'>
       {pokeList?.map(poke => <Card key={poke.id} poke={poke} />)}
    </div>
   )
}
export default Cards