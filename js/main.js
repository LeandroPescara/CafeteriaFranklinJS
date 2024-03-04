const contenedorTarjetas = document.getElementById("productos-container");

fetch("././json/productos.json")
  .then((response) => response.json())
  .then((data) => {
    const productos = data;
    crearTarjetasProductosInicio(productos);
  });

function crearTarjetasProductosInicio(productos) {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList = "tarjeta-producto";
    card.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`;
    contenedorTarjetas.appendChild(card);
    card
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}

hero.innerHTML = `
    <h3>Descubre nuestras especialidades</h3>
    <a href="#productos-container"><button>Hacer pedido</button> </a>`;
