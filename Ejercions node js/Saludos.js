// Devuelve "Hola, Juan"
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function holaMundo(){
    return `Hola, camilo ¿Cómo estás hoy?`;
}

// Exporta las funciones `saludar` y `holaMundo` usando `module.exports`
module.exports =  {
    saludar: saludar,
    holaMundo: holaMundo
}
