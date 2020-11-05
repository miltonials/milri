// obtener fecha
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

// MODAL DE SIGNIN

// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};
// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined)
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
          customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  addAttributes(customElement, attributes);
  return customElement;
};

//   imprimir modal
const printModal = (content) => {
  // crear contenedor interno
  const modalContentEl = createCustomElement(
    "div",
    {
      id: "content--modal",
      class: "content--modal",
    },
    [content]
  );
  // crear contenedor principal
  const modalContainerEl = createCustomElement(
    "section",
    {
      id: "modal--container",
      class: "modal--container",
    },
    [modalContentEl]
  );

  // Imprimir modal
  document.body.appendChild(modalContainerEl);
  // remover modal
  const removeModal = () => {
    document.body.removeChild(modalContainerEl);
  };

  modalContainerEl.addEventListener("click", (e) => {
    if (e.target === modalContainerEl) {
      removeModal();
    }
  });
};
const mostrarContrasena = () => {
  let tipo = document.getElementById("password");
  let mostrarContrasenaBtn = document.getElementById("showPassword--btn");
  if (tipo.type == "password") {
    tipo.type = "text";
    mostrarContrasenaBtn.value = "Ocultar contraseña🔒";
  } else {
    tipo.type = "password";
    mostrarContrasenaBtn.value = "Mostrar contraseña🔓";
  }
};

// printModal (`<h1>hola mundo</h1>`);

document.getElementById("miActividad--btn").addEventListener("click", () => {
  printModal(`
    <h2>Agregar el modal de actividad</h2>
    `);
});
document.getElementById("agendarEvennt--btn").addEventListener("click", () => {
  printModal(`
    <h2>Agregar el modal de agendar evento</h2>
    `);
});

document.getElementById("iniciarSesion--btn").addEventListener("click", () => {
  printModal(`
    <div class="iniciarSesion--container">
      <div class="iniciarSesion__information--container">
        <h2>Iniciar sesion</h2>
        <p>¡Hola! Si tienes una cuenta MILRI inicia sesión</p>
        <form action="iniciarSesion" id="iniciarSesion--Form">
          <label for="correo">
            <p>Correo</p>
            <input type="email" name="correo" id="correo" placeholder="Digita tu correo" required>
          </label>
          <label for="password">
            <p>
              Contraseña
              <input type="button" id="showPassword--btn" value="Mostrar contraseña🔓" onclick="mostrarContrasena()">
            </p>
            <input type="password" name="password" id="password" placeholder="Digita tu contraseña" required>
          </label>
          <label type="submit" for="iniciarSesion">
            <button>Iniciar sesión</button>
          </label>
          <i>Ya sé que me falta algo, pero es mi versión 0.0.1</i>
        </form>
      </div>
    </div>
    `);
  const signInForm = document.querySelector("#iniciarSesion--Form");

  // LOGEAR USUSARIO
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;

    auth
        .signInWithEmailAndPassword(correo, password)
        .then(userCredential => {
          let modal = document.getElementById('modal--container');

          document.querySelector("#iniciarSesion--btn > a > strong").innerHTML = "Cerrar Sesión";
          modal.remove();
          console.log("Has iniciado sesión");
          // console.log(userCredential.user.displayName);

        }) 
  });


  
  // crear usuario
  // signInForm.addEventListener('submit', (e) => {
  //   const correo = document.querySelector('#correo').value;
  //   const password = document.querySelector('#password').value;

  //   e.preventDefault();

  //   console.log(printModal.modalContentEl);

  //   auth
  //     .createUserWithEmailAndPassword(correo, password)
  //     .then(userCredential => {
  //       // removeModal
  //       let iniciarSesion_btn = document.getElementById('iniciarSesion--btn');
  //       let modal = document.getElementById('modal--container');

  //       modal.remove();
  //       // iniciarSesion_btn.

  //       alert("registrado");
  // })
  // });
});
