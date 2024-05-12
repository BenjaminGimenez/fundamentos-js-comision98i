//OBJETOS MATH Y STRING

// ==== MATH ===== //

//ROUND => me redondea un numero

const redondeo = Math.round(5.5)

console.log(redondeo)

//FLOR -> se redondea al menor entero entre 2 numeros aunque sea decimal
const minimo= Math.floor(5.99999)

// CEIL => se redondea al mayor entero entre 2 numeros aunque sea decima
const maximo= Math.ceil(5.011111)

//RANDOM => devuelve un numero aleatorio entre 0 y 1
const miNumero = Math.random()

//MAX => para sacar el numero maximo de un conjunto de numero

const numeroMaximo = Math.max(1,2,3,4)

console.log(numeroMaximo)

//MIN => para sacar el numero minimo de un conjunto de numero

const numeroMinimo = Math.min(1,2,3,4)

console.log(numeroMinimo)

// ==== STRING ===== //

const cadena = 'este es un texto en cadena'

cadena.length //es una propiedad de String, nos devuleve la cantidad de caracteres

//metodos

cadena.toUpperCase() //devuelve todo en mayuscula

cadena.toLowerCase() //devuelve todo en minuscula

cadena.slice(0,5) //permite recortar una cadena 

cadena.concat('hola') //permite concatenar la cadena mas lo que pongamos dentro del parentesis

cadena.trim() //permite sacar los espacios en blanco adelante y atras de una cadena en especifico

cadena.charAt() //permite devolver un caracter en cierta posicion

cadena.At() //lo mismo que charAT pero permite devolver numero negativos

cadena.split() //permite devolver un arreglo divido por los espacios

cadena.replace('un', 'el') //para reemplazar un caracter, el primero es el que queremos cambiar, el segundo x el q vamos a cambiar

//cadena.replaceALL() PARA CAMBIAR TODOS LOS CARACTERES QUE SEAN IGUALES