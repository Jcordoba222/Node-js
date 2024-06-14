const fs= require('fs')

fs.readFile('readFile.html','utf-8',(err,contenido)=>{
    if(err){
        console.log(err)
    }else{
        console.log(contenido)  
    }

});

fs.readFile('readFile.html','utf-8',(err,contenido)=>{
    if(err){
        throw err
    }else{
        console.log(contenido) 
    }

});