//crear un menu de 3 opciones

const opcion = Number(
  prompt(`eliga 1 de las siguientes opciones

1. Sumar
2. Restar
3. Dividir
4. Salir`)
);

//SWITCH

/*sirve para evaluar condiciones putuales, opciones iguales */

switch (opcion) {
  case 1:
    alert('Sumando')
    break;
  case 2:
    alert('Restando')
    break;
  case 3:
    alert('Dividiendo')
    break;
  default:
    alert('Nos vemos')
}
