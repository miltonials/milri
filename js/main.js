/*DARK-THEME*/

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

// EVENTOS
const onGetEvents = (callback) =>
  fs.collection("evento").orderBy("fecha", "desc").onSnapshot(callback);
const eventList = document.querySelector(".aside-container");

document.addEventListener("DOMContentLoaded", () => {
  onGetEvents((querySnapshot) => {
    if (querySnapshot.empty) {
      eventList.innerHTML = `
      <div class="card event">
      <figure class="card-image">
      <img src="./assets/imgs/imagotipo.png" alt="Imagen de un evento" >
      </figure>
      <div class="card-information">
      <h2 class="title">No hay eventos</h2>
      <p>No hay eventos</p>
      </div>
  </div>
      `;
    } else {
      eventList.innerHTML = "";
      let html = "";
      querySnapshot.forEach((doc) => {
        const evento = doc.data();
        const card = `
          <div class="card event">
              <figure class="card-image">
              <img src="${evento.imgLink}" alt="Imagen de un evento" >
              </figure>
              <div class="card-information">
              <h2 class="title">${evento.title}</h2>
              <p>${evento.description} <br />
                <i class="fecha--container">Remitente: ${evento.userEmail}</i>
              </p>
              <i class="fecha--container">
                Publicado el: ${evento.publicado} <br />
                Fecha del evento: ${evento.fecha}
              </i>
              </div>
          </div>
          `;
        html += card;
      });
      eventList.innerHTML = html;
    }
  });
});
