const autor = {
    nombre: "Steve Gates",
    usuario: "",
    correo: "stevewinner@outlook.com",
    descripcion:
      "Fanático de la tecnología y profesor de las artes de programación con javascript",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVzcOZEqLQk9Ma142okaHnitwOAvlaCgTw&usqp=CAU",
  };
  
  const contenedorTarjeta = document.querySelector('#contenedor_tarjeta');
  
  const crearTarjeta = () => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
  
    let datosAutor = `<img src="${autor.imagen}" class="card-img-top" alt="${autor.nombre}">
    <div class="card-body">
      <h5 class="card-title">${autor.nombre}</h5>
      <p class="card-text">${autor.descripcion}</p>
      <a href="#" class="btn btn-primary">Ver más</a>
    </div>`;
  
    tarjeta.innerHTML = datosAutor;
  
    contenedorTarjeta.appendChild(tarjeta);
  }
  
  crearTarjeta();
  