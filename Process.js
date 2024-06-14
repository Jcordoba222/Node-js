javascript

console.log(process)

//Este comando imprime el objeto process en la consola. El objeto process es un objeto global de Node.js que proporciona información y control sobre el proceso actual de Node.js.

//javascript

console.log(process.argv[2])
console.log(process.argv[3])

//Estos comandos imprimen el segundo y tercer argumento proporcionados al script de Node.js cuando se ejecuta desde la línea de comandos. process.argv es una matriz que contiene los argumentos de línea de comandos pasados al script. El primer elemento (process.argv[0]) es la ruta del ejecutable de Node.js, el segundo elemento (process.argv[1]) es la ruta del archivo JavaScript en ejecución y los elementos subsiguientes son los argumentos proporcionados al script.

//javascript

for (let i = 2; i < process.argv.lengthi; i++){
     console.log(process.argv[i])
}

//Este es un bucle for que itera sobre los argumentos de línea de comandos pasados al script, comenzando desde el tercer argumento (process.argv[2]). Cada argumento se imprime en la consola.

//javascript

console.log(process.memoryUsage())

//Este comando imprime un objeto que describe el uso de la memoria del proceso de Node.js, que incluye la cantidad de memoria asignada, la cantidad de memoria residente, la cantidad de memoria compartida, etc.

//javascript

const os = require(`os`)

//Esta línea importa el módulo os de Node.js, que proporciona métodos para interactuar con el sistema operativo del servidor.

//javascript

console.log(os.type())

//Este comando imprime el tipo de sistema operativo del servidor.

//javascript

console.log(os.homedir())

//Este comando imprime el directorio de inicio del usuario actual.

//javascript

console.log(os.uptime())

//Este comando imprime el tiempo de actividad del sistema en segundos.

//javascript

console.log(os.userInfo())

//Este comando imprime un objeto que contiene información sobre el usuario actual del sistema, como el nombre de usuario, el UID, el GID, el directorio de inicio, etc.

