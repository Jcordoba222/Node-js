// Devuelve "Hola, Juan"

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function holaMundo(){
    return `Hola , camilo Como estas hoy`
}

//module.exports.saludar=saludar
//module.exports.holaMundo=holaMundo



module.exports =  {
    saludar:saludar,
    holaMundo:holaMundo
}

