function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

//mostrarTema("Node");
setTimeout(mostrarTema,9000,'Node.js')


function sumar(a,b) {
    console.log(`El resultado es:${a+b}`);
}

setTimeout(sumar, 2000,10,10)


///

function mostrar(Tema1){
    console.log(`Estoy aprendiendo:${Tema1}`);
}
console.log('Antes')
setImmediate(mostrar,'setImmediate')
console.log('Despues')