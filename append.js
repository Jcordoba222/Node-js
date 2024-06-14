const fs= require('fs')



fs.appendFile('append.html', '<p>Hola vienvenido</p>', (err) => {
    if (err) {
        throw err
    } 
    console.log('Archivo actualizado correctamente.');
});