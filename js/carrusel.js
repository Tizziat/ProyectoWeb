const imagenes = [ "Imagenes/jauria1.jpg","Imagenes/cachorro1.jpg", "Imagenes/adulto1.jpg", "Imagenes/cachorro2.jpg", "Imagenes/adulto2.jpg", "Imagenes/cachorro3.jpg", "Imagenes/cachorros-jugando.jpg"];

const alts = ["Cachorro pequeño de pelaje claro corriendo feliz por un sendero", "Perro mestizo echado descansando detrás de una reja de alambre", "Cachorro tímido asomando la cabeza detrás de una puerta de madera", "Perro blanco y marrón asomado con la lengua afuera entre barrotes", "Cachorro tricolor detrás del alambrado mirando al frente", "Dos perros jugando divertidos sobre el césped verde"];

let indiceActual = 0;

const imagen = document.getElementById("imagen-carrusel");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

function actualizarImagen() {
    imagen.src = imagenes[indiceActual];
    imagen.alt = alts[indiceActual];
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