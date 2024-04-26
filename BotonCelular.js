console.log("El archivo JavaScript se cargó correctamente.");

document.addEventListener("DOMContentLoaded", function() {
    console.log("El DOM ha sido completamente cargado y analizado.");
});

const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
});