const imagenes = [ "Imagenes/jauria1.jpg","Imagenes/cachorro1.jpg", "Imagenes/adulto1.jpg", "Imagenes/cachorro2.jpg", "Imagenes/adulto2.jpg", "Imagenes/cachorro3.jpg", "Imagenes/cachorros-jugando.jpg"];

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