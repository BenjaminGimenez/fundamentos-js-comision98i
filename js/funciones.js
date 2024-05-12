//FUNCIONES

/*
realiza una tarea específica y puede ser reutilizado en diferentes partes de un programa.
 Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser asignadas a variables,
  pasadas como argumentos a otras funciones, devueltas como valores de otras funciones, etc.
*/

//SINTAXIS

//parametros: pueden tener o no parametros, depende de cada funcion

function name(/* parametros o no*/) {
  //logica de lo que va a hacer
  //return
}

name(/* parametros o no*/); //la declaramos a la funcion



// ====== PRACTICA ======== //

//crear una calculadora que sume, reste, multiplique y divida 2 numeros

/*
function calculadora(num1, num2, operacion) {
  let resultado = 0;

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
      
    case "/":
      if (num2 === 0) {
        console.log('no se puede realizar')
        return
      }
      resultado = num1 / num2;
      break;

    default:
        console.log('escribi bien la operacion')
  }

  console.log(resultado)

  return //en este caso puede o no estar xq no me esta returnando nada
}

let num1 = Number(prompt('ingrese el primer numero'))
let num2 = Number(prompt('ingrese el segundo numero'))
let operacion = prompt('ingrese la operacion')

calculadora(num1, num2, operacion)
*/




