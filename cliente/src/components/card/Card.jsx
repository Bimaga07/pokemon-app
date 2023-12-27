 import '../card/card.style.css'
const Card = ({id, name, image, hp, attack, types}) => {

    return (
        <div className="card" key={id}>
            <p>name: {name}</p>
            
            <img src={image} alt= {name} />
            <p>hp: {hp}</p>
            <p>Attack: {attack}</p>
            {types.map((e, index) => (
                <p key={index}>{e}</p>
            ))}
        </div>
    );
};


export default Card
 

