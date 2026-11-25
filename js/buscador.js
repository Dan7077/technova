const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("categoria");

// Muestra solo los productos que coinciden con lo escrito y con la categoría
function filtrar() {
  const texto = buscador.value.toLowerCase();
  const tipo = filtroCategoria.value;

  const resultado = productos.filter(function (producto) {
    const coincideTexto = producto.title.toLowerCase().includes(texto);
    const coincideTipo = tipo === "todas" || producto.category === tipo;
    return coincideTexto && coincideTipo;
  });

  mostrarProductos(resultado);
}

buscador.addEventListener("input", filtrar);
filtroCategoria.addEventListener("change", filtrar);