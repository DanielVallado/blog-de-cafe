//* Verificar contacto
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

// Variables
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

// Eventos
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
formulario.addEventListener("submit", function (e) {
  //* Evento del submit
  e.preventDefault();

  // Validar el formulario
  const { nombre, email, mensaje } = datos;
  const stringVacio = email === "" || nombre === "" || mensaje === "";

  if (!stringVacio) {
    mostrarAlerta("Mensaje enviado correctamente", stringVacio);
  } else {
    mostrarAlerta("Todos los campos son necesarios", stringVacio);
  }
});

// Funciones
function leerTexto(event) {
  datos[event.target.id] = event.target.value;
}

function mostrarAlerta(message, error = null) {
  const alerta = document.createElement("p");
  alerta.textContent = message;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  setTimeout(() => { // Desaparecer luego de 5s
    alerta.remove();
  }, 3000);
}
