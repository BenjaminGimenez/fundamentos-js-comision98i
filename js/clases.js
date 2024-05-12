//PascalCase

class Persona {
    // Propiedades usando constructor
    constructor(nombre, edad, casado){
        this.nombre = nombre;
        this.edad = edad;
        this.casado = casado;
    }
    // Método
    presentarse(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const benjamin = new Persona('Benjamin', 26, true);

// Llamada al método presentarse() en el objeto benjamin
benjamin.presentarse();