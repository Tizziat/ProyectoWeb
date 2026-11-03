const formulario = document.getElementById("form-contacto");
const resumenEnvio = document.getElementById("resumen-envio");

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

  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorTelefono.textContent = "";
  resumenEnvio.innerHTML = "";

  let esValido = true;

  // validaciones //
  // 1
  if (nombre.length < 4) {
    errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
    esValido = false;
  }

  // 2
  if (!email.includes("@") || !email.includes(".")) {
    errorEmail.textContent = "El correo debe incluir un '@' y un '.com, .com.ar, etc'";
    esValido = false;
  }

  // 3
  if (isNaN(telefono) || telefono === "") {
    errorTelefono.textContent = "Ingresa únicamente números en el teléfono.";
    esValido = false;
  }

  // si esValido sigue siendo true, se genera el resumen
  if (esValido) {
    resumenEnvio.innerHTML = `
      <div class="tarjeta-resumen">
        <h3>¡Solicitud Enviada con Éxito!</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <p class="mensaje-exito">Nos pondremos en contacto contigo a la brevedad. ¡Gracias!</p>
      </div>
    `;

    formulario.reset();
  }
});