const fs= require('fs')


fs.unlink('main.html',(err) => {
    if (err ) {
        throw err;
    } 
    console.log('Archivo eliminado correctamente.');
});

fs.unlinkSync('main.html',(err) => {
    if (err ) {
        throw err;
    } 
    console.log('Archivo eliminado correctamente.');
});

