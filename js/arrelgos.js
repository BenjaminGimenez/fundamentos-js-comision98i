//ARREGLOS

/* 
 es una estructura de datos que se utiliza para almacenar una colección de elementos.
Estos elementos pueden ser de cualquier tipo de datos, como números, cadenas de texto, objetos, funciones,u otros arreglos. 
*/

let nombres = ['benjamin', 'pablo', 'laura']
let edades = [24, 22, 27]


console.log(edades)

//PROPIEDADES

console.log(nombres.length) //devuelve la longitud del arreglo

//METODOS

//PUSH: Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
nombres.push('matias') 

///POP: Elimina el último elemento del arreglo y lo devuelve.
nombres.pop()

//SHIFT: Elimina el primer elemento del arreglo y desplaza todos los otros elementos hacia una posición menor.
nombres.shift()

//UNSHIFT: Agrega uno o más elementos al inicio del arreglo y desplaza los elementos existentes hacia posiciones mayores.
nombres.unshift('jose')

//SPLICE: Permite modificar un arreglo eliminando, reemplazando o agregando elementos en cualquier posición.
nombres.splice(1,2) //--> se elimina desde el 1 hasta el 2


//CALLBACK

//imprimir los elementos en la consola

//metodo forEach 

/*
en JavaScript se utiliza para iterar sobre los elementos de un arreglo y 
ejecutar una función de devolución de llamada (callback) una vez por cada elemento del arreglo. 
 */

const arreglo = ['🍔', '🍟', '🌭'];

arreglo.forEach((elemento, index)=>{

  console.log(`${index + 1} - ${elemento}`);
})


//metodo MAP

/*
El método map() en JavaScript se utiliza para iterar sobre los elementos de un arreglo y ejecutar una función
de devolución de llamada (callback) en cada uno de ellos. A diferencia del método forEach(),map() devuelve un nuevo arreglo
con los resultados de la función de devolución de llamada aplicada a cada elemento del arreglo original. 
*/

const numeros = [1, 2, 3, 4, 5];

const nuevosNumeros = numeros.map(function(numero) {
  return numero * 2;
});

console.log(nuevosNumeros); // Salida: [2, 4, 6, 8, 10]

//metodo FIND

/*
El método find() en JavaScript se utiliza para buscar el primer elemento en un arreglo que cumpla con cierta condición
 especificada en una función de devolución de llamada (callback). Una vez que encuentra un elemento que cumple con
  la condición, find() devuelve ese elemento. Si ningún elemento cumple con la condición, 
*/

const numeroMayorTres = numeros.find(function(numero) {
    return numero > 3;
})

console.log(numeroMayorTres);

//metodos FILTER / INCLUDES ====> tambien tenemos esos metodos.

