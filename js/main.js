// obtener fecha
{
  let meses = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  );
  let f = new Date();
  console.log(meses[f.getMonth()]);
}

/*DARK-THEME*/
const bodyColors = document.querySelector("#body");

/*NAVBAR*/
const rigth_menu = document.querySelector(".rigth-menu");
const left_menu = document.querySelector(".left-menu");
const logo = document.querySelector(".logo");
const burgerButton = document.querySelector("#burger-menu");
const card = document.querySelector(".aside-container");
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
    bodyColors.classList.remove("is-active");
    logo.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
    rigth_menu.classList.remove("is-active");
    left_menu.classList.remove("is-active");
    card.classList.remove("is-active");
  } else {
    bodyColors.classList.add("is-active");
    logo.classList.add("is-active");
    burgerButton.classList.add("is-active");
    rigth_menu.classList.add("is-active");
    left_menu.classList.add("is-active");
    card.classList.add("is-active");
  }
}

// mostrarContraseña_btn
const mostrarContrasena = () => {
  let tipo = document.getElementById("password");
  let mostrarContrasenaBtn = document.getElementById("showPassword--btn");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
};

// EVENTOS
const eventList = document.querySelector(".aside-container");

const setupEvents = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const evento = doc.data();
      const card = `
      <div class="card event">
        <figure class="card-image">
        <img src="https://www.diariovivo.com/wp-content/uploads/2020/07/unnamed-2-5-750x450.jpg" alt="Imagen de un evento" >
        </figure>
        <div class="card-information">
          <h2 class="title">${evento.title}</h2>
          <p>${evento.description}</p>
          <button><strong>Helouda</strong></button>
        </div>
      </div>
      `;
      html += card;
    });
    eventList.innerHTML = html;
  } else {
    eventList.innerHTML = `
    <div style="position: relative; padding-top: 56.25%; width: 100%;
    margin: auto;">
      <iframe width="560" height="365" src="https://www.youtube.com/embed/Yw6u6YkTgQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;height: 100%;"></iframe>
      </div>`;
  }
};

// Cambio de estado de
auth.onAuthStateChanged((user) => {
  if (user) {
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
      "Cerrar sesión";
    fs.collection("evento")
      .orderBy("title", "desc")
      .get()
      .then((snapshot) => {
        setupEvents(snapshot.docs);
        miActividad.style.display = "block";
        egendar_evento.style.display = "block";
      });
  } else {
    fs.collection("evento")
      .orderBy("title", "desc")
      .get()
      .then((snapshot) => {
        setupEvents(snapshot.docs);
        miActividad.style.display = "none";
        egendar_evento.style.display = "none";
      });
    document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
      "Iniciar Sesión";
  }
});
