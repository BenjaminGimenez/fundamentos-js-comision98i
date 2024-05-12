//practica de Clases, desarrolar un sismeta de libreria

//clase padre
export class Libro {
    constructor(autor, titulo, precio, stock){
        this.autor = autor;
        this.titulo = titulo;
        this.precio = precio;
        this.stock = stock;
        //para generar un ID unico, y no pasarlo x parametro
        this.id = window.crypto.randomUUID();
    }

    //metodos
    verInfo(){
    console.log(this.autor, this.titulo, this.precio, this.stock, this.id)
    }
}

