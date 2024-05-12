/*
un objeto es una entidad que contiene un conjunto de propiedades y métodos relacionados.
Estas propiedades son pares de clave-valor, donde la clave es una cadena (también conocida como nombre de propiedad) y
el valor puede ser de cualquier tipo de datos, incluidos otros objetos, funciones y valores primitivos como números,
cadenas y booleanos.
*/

import { generarNumeroAleatorio } from "./utils/utils.js";

//estructura de un objeto
const persona = {

    //propiedades
    nombre: 'Benjamin',
    edad: generarNumeroAleatorio(1, 100),
    casado: false,
    idiomas: ['ingles', 'frances', 'portugues'],
    direccion: {
        calle: 'fortunata garcia',
        numero: '123',
        ciudad: 'Tucuman'
    },

    //metodos
    presentarse: function(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

console.log(persona)

persona.presentarse();

//agregando propiedades despues de crearse
persona.apellido = 'Gimenez'

//otra forma de acceder a una propiedad
console.log(persona['casado'])