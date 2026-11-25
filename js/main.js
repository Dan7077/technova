const menu = document.querySelector("nav");

// Botón para ocultar y mostrar el menú
document.getElementById("boton-menu").addEventListener("click", function () {
  menu.classList.toggle("oculto");
});

// Botón para el modo oscuro
document.getElementById("boton-modo").addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});

// El menú marca la sección elegida
document.querySelectorAll("nav a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    document.querySelector("nav a.activo").classList.remove("activo");
    enlace.classList.add("activo");
  });
});