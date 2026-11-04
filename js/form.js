const formulario = document.getElementById("form-contacto");
const resumenEnvio = document.getElementById("resumen-envio");

// expresiones regulares
const regexNumeros = /\d/;
const regexEmail = /\S+@\S+\.\S+/;
const regexTelefono = /^\d{8,15}$/;

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const motivo = document.getElementById("motivo").value;
  ////////////////////////////////////
  const errorNombre = document.getElementById("error-nombre");
  const errorEmail = document.getElementById("error-email");
  const errorTelefono = document.getElementById("error-telefono");
  const errorMotivo = document.getElementById("error-motivo");

  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorTelefono.textContent = "";
  errorMotivo.textContent = "";
  resumenEnvio.innerHTML = "";

  let esValido = true;

  // validaciones //
  // 1
  if (nombre.length < 4 || regexNumeros.test(nombre)) {
    errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
    esValido = false;
  }

  // 2
  if (!regexEmail.test(email)) {
    errorEmail.textContent = "Ingrese un correo electronico valido (correoelec@gmail.com).";
    esValido = false;
  }

  // 3
  if (!regexTelefono.test(telefono)) {
    errorTelefono.textContent = "Ingresa únicamente números en el teléfono (entre 8 y 15 digitos).";
    esValido = false;
  }

  // 4
  if (motivo === "") {
    errorMotivo.textContent = "Por favor, selecciona un motivo de consulta.";
    esValido = false;
  }

  // si esValido sigue siendo true, se genera el resumen
  if (esValido) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-resumen";

    const titulo = document.createElement("h3");
    titulo.textContent = "Solicitud enviada con exito!";

    const pNombre = document.createElement("p");
    pNombre.innerHTML = "<strong>Nombre:</strong> " + nombre;

    const pEmail = document.createElement("p");
    pEmail.innerHTML = "<strong>Email:</strong> " + email;

    const pTelefono = document.createElement("p");
    pTelefono.innerHTML = "<strong>Teléfono:</strong> " + telefono;

    const pMotivo = document.createElement("p");
    pMotivo.innerHTML = "<strong>Motivo:</strong> " + motivo;

    const pExito = document.createElement("p");
    pExito.className = "mensaje-exito";
    pExito.textContent = "Nos pondremos en contacto contigo a la brevedad. ¡Gracias!";

    // agrega los elementos hijos al contenedor de tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(pNombre);
    tarjeta.appendChild(pEmail);
    tarjeta.appendChild(pTelefono);
    tarjeta.appendChild(pMotivo);
    tarjeta.appendChild(pExito);

    // inserta la tarjeta en el contenedor 
    resumenEnvio.appendChild(tarjeta);

    // limpia campos del form
    formulario.reset();
  }
});