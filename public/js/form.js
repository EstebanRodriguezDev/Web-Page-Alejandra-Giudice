// Variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector(".contact__form");
const correoEr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const nombreEr = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

// Variables de los inputs
const nombre = document.querySelector("#nombres");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  // Documento ya cargado
  document.addEventListener("DOMContentLoaded", iniciarApp);

  // Inputs del formulario
  nombre.addEventListener("keyup", validarFormulario);
  correo.addEventListener("keyup", validarFormulario);
  mensaje.addEventListener("keyup", validarFormulario);

  // Enviar email
  formulario.addEventListener("submit", envioEmail);
}

// Funciones
function iniciarApp() {
  btnEnviar.disabled = true;
}
// Valida el formulario
function validarFormulario(e) {
  // Valicacion input text
  if (e.target.type === "text") {
    const iconName = document.querySelector(".input__icon-name");
    if (nombreEr.test(e.target.value)) {
      e.target.style.border = "none";
      iconName.style.opacity = "0";
    } else {
      e.target.style.border = "2px solid #e54b4b";
      iconName.style.opacity = "1";
    }
  }

  // Validacion del email
  if (e.target.type === "email") {
    const iconEmail = document.querySelector(".input__icon-email");
    if (correoEr.test(e.target.value)) {
      e.target.style.border = "none";
      iconEmail.style.opacity = "0";
    } else {
      e.target.style.border = "2px solid #e54b4b";
      iconEmail.style.opacity = "1";
    }
  }
  if (
    correoEr.test(correo.value) &&
    nombre.value !== "" &&
    mensaje.value !== ""
  ) {
    btnEnviar.disabled = false;
  }
}

// Envio del email
function envioEmail(e) {
  e.preventDefault();

  let name = document.querySelector("#nombres").value;
  let email = document.querySelector("#correo").value;
  let message = document.querySelector("#mensaje").value;

  sendEmail(name, email, message);
}

// Funcion resetear el formulario
function resetearFormulario() {
  formulario.reset();

  iniciarApp();
}

// Enviar datos del mensaje al correo

function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "estebandavidrodriguez99@gmail.com",
    Password: "ahzufhynrjxzjspi",
    To: "estebandavidrodriguez99@gmail.com",
    From: "estebandavidrodriguez99@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then((message) => {
    const envioExito = document.querySelector(".exito");

    // Muestro el mensaje de envio exitoso.
    envioExito.style.opacity = "1";

    // Quito mensaje
    setTimeout(() => {
      envioExito.style.opacity = "0";

      resetearFormulario();
    }, 4000);
    // console.log(`${name}  ${email}  ${message}`);
  });
}
