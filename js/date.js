const fecha = new Date(); //los meses se cuentan del 0 al 11

console.log(fecha)
console.log(fecha.toISOString()) //Esto es útil cuando necesitas representar fechas de una manera estandarizada y fácil de procesa

console.log(fecha.getFullYear()) //devuelve el anio

console.log(fecha.getMonth()) //devuelve el mes del 0 al 11

console.log(fecha.getDay()) //devuelve el dia de la semana(lunes, martes, etc en numeros 1, 2, etc)

console.log(fecha.getDate()) //devuelve el que numero de dia es

console.log(fecha.getHours()) //devuelve las horas