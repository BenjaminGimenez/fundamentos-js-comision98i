const recargar = () => {
     location.reload();
}

//funciones para manejar el tiempo

//setTimeout(función, tiempo); //Ejecuta una función después de esperar una cantidad específica de milisegundos.

//setInterval(función, intervalo); //Ejecuta una función de forma repetida, cada cierto intervalo de tiempo especificado en milisegundos.

//clearTimeout(id); //Cancela la ejecución de un temporizador creado con setTimeout.

//clearInterval(id); //Detiene la ejecución de un temporizador creado con setInterval.

// Ejecutar una función después de 2 segundos
setTimeout(function() {
    console.log("Han pasado 2 segundos");
}, 2000);

// Ejecutar una función cada segundo
let contador = 0;
const intervalID = setInterval(function() {
    contador++;
    console.log("Han pasado " + contador + " segundos");
}, 1000);

// Detener la ejecución después de 5 segundos
setTimeout(function() {
    clearInterval(intervalID);
    console.log("Temporizador detenido después de 5 segundos");
}, 5000);