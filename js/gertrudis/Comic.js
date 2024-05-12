import { Libro } from "./Libro.js";

//clase hijo
export class Comic extends Libro {
  constructor(autor, titulo, precio, stock, ilustradores, volumen) {
    super(autor, titulo, precio, stock);
    this.ilustradores = ilustradores;
    this.volumen = volumen;
  }
}
