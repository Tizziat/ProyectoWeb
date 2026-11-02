const imagenes = [ "Imagenes/familia.jpg","Imagenes/milton-carrusel2.webp", "Imagenes/perros.jpg", "Imagenes/vacunacion.jpg"];

let indiceActual = 0;

const imagen = document.getElementById("imagen-carrusel");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

function actualizarImagen() {
    imagen.src = imagenes[indiceActual];
}

btnSiguiente.addEventListener("click", () => {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    actualizarImagen();
});

btnAnterior.addEventListener("click", () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    actualizarImagen();
});