import footer from "./footer/index.js";
import header from "./header/index.js";

header();
footer();

let rigthMenu = document.querySelector(".rigth-menu");
let leftMenu = document.querySelector(".left-menu");
let logo = document.querySelector(".logo");
let burgerButton = document.querySelector("#burger-menu");
let tablet = window.matchMedia("screen and (max-width:812px)");

tablet.addListener(validation);

validation(tablet); 

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

function hideShow() {
  if (rigthMenu.classList.contains("is-active")) {
    logo.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
    rigthMenu.classList.remove("is-active");
    leftMenu.classList.remove("is-active");
  } else {
    logo.classList.add("is-active");
    burgerButton.classList.add("is-active");
    rigthMenu.classList.add("is-active");
    leftMenu.classList.add("is-active");
  }
}

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
