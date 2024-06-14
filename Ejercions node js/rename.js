const fs= require('fs')

fs.rename('rename.html', 'Rename.html', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Archivo renombrado correctamente.');
    }
});

fs.renameSync('rename.html', 'Rename.html', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Archivo renombrado correctamente.');
    }
});