import { Link, useParams } from 'react-router-dom'
import '../detail/detail.style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDetail } from '../../redux/action'

const Detail =() =>{
    let {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(id))
        return () => {
            dispatch({
                type: "GET_DETAIL",
                payload: {}
            })
        }
    }, [dispatch, id])

    const detailPokemon = useSelector((state) => state.detail)
    const typeColors = {
        fire: "#F57D31",
        normal: "#AAA67F",
        fighting: "#D3425F",
        flying: "#A891EC",
        ground: "#DEC16B",
        poison: "#A43E9E",
        rock: "#B69E31",
        bug: "#A7B723",
        ghost: "#70559B",
        steel: "#5695A3",
        water: "#6493EB",
        grass: "#74CB48",
        electric: "#F9CF30",
        psychic: "#FB5584",
        ice: "#9AD6DF",
        dragon: "#7037FF",
        dark: "#75574C",
        fairy: "#E69EAC",
        unknown: "#BF5481",
        shadow: "#36045E",
    }

    if(!detailPokemon) return <p>loading...</p>
    console.log('esto' ,detailPokemon);
    return (
        <div >
            <Link to='/home'>
            <button>volver</button>
            </Link>
            {
                detailPokemon.length > 0 ? (
                  
                        <div
                            
                            style={{
                                backgroundColor: typeColors[detailPokemon[0]?.types[0]],
                            }}
                        >

                            <div >
                                <img
                                    
                                    src={detailPokemon[0].image}
                                    alt={detailPokemon[0].name}
                                />
                            </div>

                            <div >
                                <h1 >
                                    {detailPokemon[0].name}
                                </h1>

                                <h3 
                                    style={{
                                        backgroundColor: typeColors[detailPokemon[0]?.types[0]],
                                    }}>
                                    <p>TYPE: </p>{detailPokemon[0]?.types.join(" ")}
                                </h3>

                                <div >
                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span>HP: </span> {detailPokemon[0]?.hp}
                                    </p>

                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span>ATTACK: </span>{detailPokemon[0]?.attack}
                                    </p>

                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span>DEFENSE: </span>{detailPokemon[0]?.defense}
                                    </p>

                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span>SPEED: </span>{detailPokemon[0]?.speed}
                                    </p>
                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span style={{ color: "black" }}>HEIGHT: </span>{detailPokemon[0]?.height}
                                    </p>

                                    <p style={{ backgroundColor: typeColors[detailPokemon[0]?.types[0]], }}>
                                        <span>WEIGHT: </span>{detailPokemon[0]?.weight}
                                    </p>

                                </div>
                            </div>
                        </div>
                
                ) : (
                    <div >
                        <p >...Loading</p>
                    </div>
                )
            }

        </div>
    )
}
export default Detail