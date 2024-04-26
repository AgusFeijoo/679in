// Referencias a elementos clave
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".gallery-img"); // Imágenes para el carrusel

// Índice de la imagen actual
var currentImageIndex = 0;

// Abre el modal con una imagen específica
function openModal(index) {
    currentImageIndex = index; // Actualiza el índice actual
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = images[currentImageIndex].src; // Asigna la fuente de la imagen
    captionText.innerHTML = images[currentImageIndex].alt; // Asigna el pie de foto
}

// Cierra el modal
function closeModal() {
    modal.style.display = "none"; // Oculta el modal
}

// Ir a la imagen anterior
function goToPreviousImage() {
    if (currentImageIndex > 0) {
        openModal(currentImageIndex - 1); // Abre el modal con la imagen anterior
    }
}

// Ir a la siguiente imagen
function goToNextImage() {
    if (currentImageIndex < images.length - 1) {
        openModal(currentImageIndex + 1); // Abre el modal con la imagen siguiente
    }
}

// Abrir el modal al hacer clic en la imagen principal
document.getElementById("mainImg").onclick = function() {
    openModal(currentImageIndex); // Abre el modal con la imagen actual
};

// Configurar evento para cerrar el modal con el botón de cierre
document.querySelector(".close").onclick = closeModal;

// Cerrar el modal al presionar la tecla 'Escape'
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { 
        closeModal(); // Cierra el modal si se presiona 'Escape'
    }
});

// Configurar evento para las flechas de navegación en el modal
document.getElementById("prevButton").onclick = goToPreviousImage;
document.getElementById("nextButton").onclick = goToNextImage;

// Configurar navegación por teclas de flecha izquierda/derecha
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        goToPreviousImage(); // Ir a la imagen anterior
    } else if (event.key === "ArrowRight") {
        goToNextImage(); // Ir a la imagen siguiente
    }
});

// Cambiar la imagen principal con las flechas
document.getElementById("main-prev").onclick = function() {
    if (currentImageIndex > 0) {
        currentImageIndex--; // Actualiza el índice
        document.getElementById("mainImg").src = images[currentImageIndex].src; // Cambia la imagen principal
    }
};

document.getElementById("main-next").onclick = function() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++; // Actualiza el índice
        document.getElementById("mainImg").src = images[currentImageIndex].src; // Cambia la imagen principal
    }
};

