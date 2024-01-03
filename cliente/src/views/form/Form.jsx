import { useDispatch, useSelector } from 'react-redux'
import '../form/form.style.css'
import { useEffect, useState } from 'react'
import { getCreated, getTypes } from '../../redux/action'
import Validation from '../form/Validation' 
const Form = () =>{
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-56YdThnTlX2LJ4ixqaLzbfPFOPTzkE1H4Q&usqp=CAU",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: "",
        weight: "",
        types: [],
    });

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    const [error, setError] = useState({})

    const handleChange = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        // Validamos solo el campo actual
        const validationErrors = Validation({ ...input, [fieldName]: fieldValue });
        setError({ ...error, [fieldName]: validationErrors[fieldName] });

        setInput({
            ...input,
            [fieldName]: fieldValue,
        });
    };

    const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            types: [...input.types, e.target.value],
        });
        setError(
            Validation({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCreated(input));

        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
    };


    
    return(
        <div className='imagenfor'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Crea Tu Pokemon</h3>
                <input className='formulario'
                type="text"
                value={input.name} 
                placeholder='name'
                name='name'
                onChange={handleChange}/>
                {error.name && error.name}

                <input className='formulario'
                type="number"
                value={input.hp}
                placeholder='hp'
                name='hp'
                onChange={handleChange} />
                 {error.hp && error.hp}
                
                <input className='formulario'
                type="number"
                value={input.attack}
                placeholder='attack'
                name='attack'
                onChange={handleChange} />
                {error.attack && error.attack}

                <input className='formulario'
                type="number"
                value={input.defense}
                placeholder='defense'
                name='defense'
                onChange={handleChange} />
                {error.defense && error.defense}

                <input className='formulario'
                type="number"
                value={input.height}
                 placeholder="Height"
                 name="height"
                 onChange={handleChange} />
                {error.height && error.height}

                <input className='formulario'
               type="number"
               value={input.weight}
               placeholder="Weight"
               name="weight"
               onChange={handleChange}
                 />
                {error.weight && error.weight}

                <select className='formulario' name="type" 
                onChange={(e) => handleSelect(e)}>

                {types.map((t, index) => (
                    <option key={index} value={t.name}>
                        {t.name}
                    </option>
                ))}
                </select>
                {error.types && typeof error.types === 'string' && <span>
                    {error.type}
                </span> }

                <button className='butoon'
                type='submit'
                name='submit'>
                    <p>CREAR</p>
                </button>
            </form>
        </div>
    )
}
export default Form