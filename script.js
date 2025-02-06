// Índice de la imagen actual
let index = 0;

// Selección de elementos
const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const totalImages = images.length;

// Botones
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Función para mostrar solo la imagen actual
function updateCarousel() {
    images.forEach(img => img.classList.remove('active')); // Oculta todas las imágenes
    images[index].classList.add('active'); // Muestra la imagen actual

    // Ajustar la altura del contenedor según la imagen activa
    const carousel = document.querySelector('.carousel');
    carousel.style.height = `${images[index].naturalHeight}px`;
}

// Función para avanzar en el carrusel
function nextImage() {
    index = (index + 1) % totalImages;
    updateCarousel();
}

// Función para retroceder en el carrusel
function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Eventos para botones
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Eventos para el teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

// Cambio automático cada 30 segundos
setInterval(nextImage, 30000);

// Mostrar la primera imagen al cargar la página
updateCarousel();

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2