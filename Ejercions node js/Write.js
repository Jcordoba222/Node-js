const fs= require('fs')

fs.writeFile('write.html', 'Contenido nuevo', (err) => {
    if (err) {
        throw err
    } 
    console.log('Archivo reenplazado correctamente.');
});

fs.writeFileSync('write.html', 'Contenido nuevo', (err) => {
    if (err) {
        throw err
    } 
    console.log('Archivo reenplazado correctamente.');
});