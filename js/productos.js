// Lista de productos que llegan de la API
let productos = [];

// Dibuja los productos en la página
function mostrarProductos(lista) {
  const contenedor = document.getElementById("lista");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se han encontrado productos.</p>";
    return;
  }

  for (const producto of lista) {
    contenedor.innerHTML +=
      '<article class="tarjeta">' +
      '<img src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
      "<h3>" + producto.title + "</h3>" +
      "<p>" + producto.price + " €</p>" +
      "</article>";
  }
}

// Pide los productos a la API
async function cargarProductos() {
  const estado = document.getElementById("estado");
  estado.textContent = "Cargando productos...";

  try {
    const categorias = ["smartphones", "laptops", "tablets"];

    for (const categoria of categorias) {
      const respuesta = await fetch("https://dummyjson.com/products/category/" + categoria);

      if (!respuesta.ok) {
        throw new Error("La API ha respondido con un error");
      }

      const datos = await respuesta.json();
      productos = productos.concat(datos.products);
    }

    estado.textContent = "";
    mostrarProductos(productos);
  } catch (error) {
    estado.textContent = "No se han podido cargar los productos. Inténtalo más tarde.";
  }
}

cargarProductos();