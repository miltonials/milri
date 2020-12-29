import footer from "./footer/index.js";
import header from "./header/index.js";

header();
footer();

/*NAVBAR*/
let rigth_menu = document.querySelector(".rigth-menu");
let left_menu = document.querySelector(".left-menu");
let logo = document.querySelector(".logo");
let burgerButton = document.querySelector("#burger-menu");
// const card = document.querySelector(".aside-container");
let tablet = window.matchMedia("screen and (max-width:812px)");

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

// Cambio de estado de
auth.onAuthStateChanged((user) => {
  let welcomeText = document.querySelector(".main-left-information > h1");
  
  if (user) {
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML ="Cerrar sesión";
    miActividad.style.display = "block";
    egendar_evento.style.display = "block";

    if (document.title === "MILRI") {
      welcomeText.innerHTML = `Bienvenido/a ${auth.currentUser.email}`;
      welcomeText.style ="border-bottom: 5px solid; border-image: var(--gradient-primary) 1";
    }
  } else {
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
    "Iniciar Sesión";
    if (document.title === "MILRI"){
      welcomeText.innerHTML = "Bienvenido/a";
      welcomeText.style ="border-bottom: none";
    }
  }
});
