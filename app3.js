//javascript

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

mostrarTema("Node");
setTimeout(mostrarTema, 9000, 'Node.js');

//Esta función mostrarTema toma un argumento tema y lo imprime en la consola dentro de una cadena de texto. Luego, se utiliza setTimeout() para llamar a mostrarTema después de 9000 milisegundos (9 segundos) con el argumento 'Node.js'.

//javascript

function sumar(a, b) {
    console.log(`El resultado es:${a+b}`);
}

setTimeout(sumar, 2000, 10, 10);

//Esta función sumar toma dos argumentos a y b, y muestra la suma de ambos en la consola. Luego, setTimeout() se utiliza para llamar a sumar después de 2000 milisegundos (2 segundos) con los argumentos 10 y 10.

//javascript

function mostrar(Tema1){
    console.log(`Estoy aprendiendo:${Tema1}`);
}
console.log('Antes');
setImmediate(mostrar, 'setImmediate');
console.log('Después');

//Esta función mostrar toma un argumento Tema1 y lo imprime en la consola dentro de una cadena de texto. setImmediate() se utiliza para llamar a mostrar inmediatamente después de la ejecución de la próxima iteración del bucle de eventos, con el argumento 'setImmediate'. Los mensajes 'Antes' y 'Después' se imprimen antes y después de la llamada a setImmediate, respectivamente.

//javascript

function mostrar(num1, num2){
    console.log(`El resultado es:${num1*num2}`);
}
setInterval(mostrar, 1500, 1, 10);

//Esta función mostrar toma dos argumentos num1 y num2, y muestra el resultado de su multiplicación en la consola. setInterval() se utiliza para llamar a mostrar repetidamente cada 1500 milisegundos (1.5 segundos), con los argumentos 1 y 10. Esto generará una secuencia de mensajes en la consola que muestran el resultado de la multiplicación de 1 y 10 cada 1.5 segundos.