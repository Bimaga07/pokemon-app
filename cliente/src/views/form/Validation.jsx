const Validation = (input) => {
    const error = {}
    if(!input.name){
        error.name ='debe ingresar un nombre'
    }else if (input.name.length > 10){
        error.name ='el nombre no debe ser mayor a 10 caracteres'
    }else if(!/^[a-zA-Z]+$/.test(input.name)){
        error.name = 'solo puede contenert letras'
    }
    if(!input.hp || input.hp <= 0 || input.hp > 255){
        error.hp = 'debe de ser mayor a 0 y menor a 255 caracteres'
    }
    if(!input.attack || input.attack <= 0 || input.attack > 255){
        error.attack = 'debe de ser mayor a 0 y menor a 255 caracteres'
    }
    if(!input.defense || input.defense <= 0 || input.defense > 255){
        error.defense = 'debe de ser mayor a 0 y menos a 255 caracteres'
    }
    if(!input.speed || input.speed <=0 || input.speed>255){
        error.speed = 'debe de ser mayor a 0 y menos a 255 caracteres'
    } 
    if(!input.height || input.height <= 0 || input.height > 255){
        error.height = 'debe de ser mayor a 0 y menos a 255 caracteres'
    }
    if(!input.weigth || input.weigth <= 0 || input.weigth > 255){
        error.weigth = 'debe de ser mayor a 0 y menos a 255 caracteres'
    }
    if(input.types.length < 1) {
        error.types = "Debes elegir al menos 2 tipos"
    }
    return error
}
export default Validation




/* name: "",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-56YdThnTlX2LJ4ixqaLzbfPFOPTzkE1H4Q&usqp=CAU",
hp: "",
attack: "",
defense: "",
speed: "",
height: "",
weight: "",
types: [], */