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

const miActividad = document.getElementById("miActividad--btn");
const egendar_evento = document.getElementById("agendarEvennt--btn");
const iniciarSesion_btn = document.getElementById("iniciarSesion--btn");

miActividad.addEventListener("click", () => {
  
  printModal(`
    <h2>Agregar el modal de actividad</h2>
    `);
});
egendar_evento.addEventListener("click", () => {
  printModal(`
    <h2>Agregar el modal de agendar evento</h2>
    `);
});
iniciarSesion_btn.addEventListener("click", () => {
  const user = firebase.auth().currentUser;

  if (user) {
    let out = document.querySelector(".logout");

    auth
      .signOut()
      .then(() => {
        console.log(`SignOut Correcto`, 4000);
        document
          .querySelector("#iniciarSesion--btn")
          .classList.remove("logout");
      })
      .catch((error) => {
        alert(`Error al realizar SignOut => ${error}`, 4000);
      });
  } else {
    printModal(`
    <div class="iniciarSesion--container">
      <div class="iniciarSesion__information--container">
        <h2>Iniciar sesion</h2>
        <p>¡Hola! Si tienes una cuenta MILRI inicia sesión</p>
        <form action="iniciarSesion" id="iniciarSesion--Form">
          <label for="correo">
            <p>Correo</p>
            <input type="email" name="correo" id="correo" placeholder="Digita tu correo" required autocomplete="email">
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

    // INICIAR SESIÓN
    const signInForm = document.querySelector("#iniciarSesion--Form");

    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const correo = document.querySelector("#correo").value;
      const password = document.querySelector("#password").value;

      auth
        .signInWithEmailAndPassword(correo, password)
        .then((userCredential) => {
          let modal = document.getElementById("modal--container");

          document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
            "Cerrar Sesión";
          modal.remove();
          printModal(`
          <h1>HAS INICIADO SESION ${auth.currentUser.email}</h1>
          <div style="position: relative; padding-top: 56.25%; width: calc(100vw - 20vw); margin: auto;">
            <iframe width="560" height="365" src="https://www.youtube.com/embed/Yw6u6YkTgQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;height: 100%;"></iframe>
          </div>
            `);
            console.log(`Bienvenido ${auth.currentUser.email}`);
        });
    });
  }
});
