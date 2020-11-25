

/*NAVBAR*/
const rigth_menu = document.querySelector(".rigth-menu");
const left_menu = document.querySelector(".left-menu");
const logo = document.querySelector(".logo");
const burgerButton = document.querySelector("#burger-menu");
// const card = document.querySelector(".aside-container");
const tablet = window.matchMedia("screen and (max-width:812px)");

tablet.addListener(validation);

validation(tablet); //Para que funcione el burgerButton si se inicia desde <767px

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

function hideShow() {
  if (rigth_menu.classList.contains("is-active")) {
    logo.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
    rigth_menu.classList.remove("is-active");
    left_menu.classList.remove("is-active");
  } else {
    logo.classList.add("is-active");
    burgerButton.classList.add("is-active");
    rigth_menu.classList.add("is-active");
    left_menu.classList.add("is-active");
  }
}

// mostrarContraseña_btn
const mostrarContrasena = () => {
  let tipo = document.getElementById("password");
  let mostrarContrasenaBtn = document.getElementById("showPassword--btn");
  if (tipo.type == "password") {
    tipo.type = "text";
    mostrarContrasenaBtn.style.backgroundImage =
      "url('./assets/icons/eye-blocked.svg')";
  } else {
    tipo.type = "password";
    mostrarContrasenaBtn.style.backgroundImage =
      "url('./assets/icons/eye.svg')";
  }
};

// Cambio de estado de
auth.onAuthStateChanged((user) => {
  if (user) {
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
      "Cerrar sesión";
    miActividad.style.display = "block";
    egendar_evento.style.display = "block";
  } else {
    miActividad.style.display = "none";
    egendar_evento.style.display = "none";
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
      "Iniciar Sesión";
  }
});