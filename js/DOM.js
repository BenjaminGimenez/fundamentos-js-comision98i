// ---Traer datos capturando el elemento----
document.getElementById("id"); //traigo la etiqueta con el id
document.getElementsByClassName("classname"); //traigo la clase
document.getElementsByTagName("tag"); //traigo el elemento por su y tag ('p')
document.querySelector("#id");
document.querySelector(".clase");
document.querySelectorAll("p");

//creando un elemento
const contenedor = document.querySelector('#contenedor-img');
const imagen = document.createElement('img');

imagen.src = 'https://media.tycsports.com/files/2023/06/24/584696/messi_862x485.webp?v=1'
imagen.alt = 'imagen de messi con la copa'
imagen.width = '500'

contenedor.appendChild(imagen) // una forma de agregar un nuevo nodo como hijo de un nodo existente en el DOM

//==== ejercicio de practica ===//

const lista = ['manzana', 'banana', 'pera', 'frutilla']
const contenedorLista = document.querySelector('#lista');

const ul = document.createElement('ul');

lista.map((item)=>{
    const li = document.createElement('li')
    li.innerText = item;
    ul.appendChild(li)
});

contenedorLista.appendChild(ul);

//eliminando un elemento

//primero se hace referencia al padre y despues al hijo
document.querySelector('#fila').removeChild(document.querySelector('#parrafo2'));