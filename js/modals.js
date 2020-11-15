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

const crearEvento = (title, description, userEmail, userUID) =>
  fs.collection("evento").doc().set({
    title,
    description,
    userEmail: auth.currentUser.email,
    userUID: auth.currentUser.uid,
  });

egendar_evento.addEventListener("click", () => {
  let user = firebase.auth().currentUser;

  if (user) {
    printModal(`
    <div class="agendarEvento--container">
      <h1>Agendar un nuevo evento</h1>
      <p>¡Hola! ${auth.currentUser.email}, crea un nuevo evento.</p>
      <form action="agendarEvento" id="agendarEvento">
        <label for="titulo">
          <h5>Título del evento</h5>
          <input type="text" name="eventTittle--container" id="eventTittle--container" autocomplete="off" required maxlength="17">
        </label>
        <label for="imgEvent">
          <input type="file" name="imgEvent" id="imgEvent" placeholder="Selecciona una imagen">
        </label>
        <label for="eventDescription--container">
          <h5>Descripción del evento</h5>
          <textarea name="eventDescription" id="eventDescription" cols="30" rows="10" required></textarea>
        </label>
        <label type="submit" for="subirEvento">
          <button id="agendar--btn">Agendar</button>
        </label>
      </form>
    </div>
      `);
  } else {
    alert("Primero debes iniciar sesión.");
  }

  // let modal = document.getElementById("modal--container");

  const agendarEvento = document.querySelector("#agendarEvento");

  agendarEvento.addEventListener("submit", async (e) => {
    e.preventDefault();

    document.querySelector("#agendar--btn").style = "display: none;";

    const title = agendarEvento["eventTittle--container"];
    const description = agendarEvento["eventDescription"];

    await crearEvento(title.value, description.value);
    document.querySelector("#agendar--btn").style = "display: block;";

    agendarEvento.reset();
    title.focus();
  });
});

miActividad.addEventListener("click", () => {
  let user = firebase.auth().currentUser;

  if (user) {
    // printModal(`
    const onGetEventsUser = (callback) =>
    fs
      .collection("evento")
      .orderBy("title", "desc")
      .where("userEmail", "==", auth.currentUser.email)
      .onSnapshot(callback);

  onGetEventsUser((querySnapshot) => {
    document.querySelector(".aside-container").innerHTML = "";

    if (querySnapshot.empty) {
      alert("estoy vacio")
    } else {
      let html = "";
      querySnapshot.forEach((doc) => {
        const evento = doc.data();
        const card = `
          <div class="card event">
              <figure class="card-image">
              <img src="../assets/icons/signIn.svg" alt="Imagen de un evento" >
              </figure>
              <div class="card-information">
              <h2 class="title">${evento.title}</h2>
              <p>${evento.description}</p>
              <button><strong>helouda</strong></button>
              </div>
          </div>
          `;
        html += card;
      });
      document.querySelector(".aside-container").innerHTML = html;
      document.querySelector("#miActividad--btn > a").classList.add("verTodosEventos");
      document.querySelector("#miActividad--btn > a").innerHTML = "verTodosEventos";
    }
  });
    //   `);
  } else {
    alert("Primero debes iniciar sesión.");
  }

  


  document.querySelector(".verTodosEventos").addEventListener("click", onGetEvents((querySnapshot) => {
        eventList.innerHTML = "";
    
        let html = "";
        querySnapshot.forEach((doc) => {
          const evento = doc.data();
          const card = `
            <div class="card event">
                <figure class="card-image">
                <img src="../assets/icons/signIn.svg" alt="Imagen de un evento" >
                </figure>
                <div class="card-information">
                <h2 class="title">${evento.title}</h2>
                <p>${evento.description}</p>
                <button><strong>Helouda</strong></button>
                </div>
            </div>
            `;
          html += card;
          document.querySelector("#miActividad--btn > a").classList.remove("verTodosEventos");
          document.querySelector("#miActividad--btn > a").innerHTML = "Mi actividad";
        });
        eventList.innerHTML = html;
      }));


});

iniciarSesion_btn.addEventListener("click", () => {
  let user = firebase.auth().currentUser;

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
        <h1>Iniciar sesión</h1>
        <p>¡Hola! Si tienes una cuenta MILRI inicia sesión</p>
        <form action="iniciarSesion" id="iniciarSesion--Form">
          <label for="correo">
            <h5>
              Correo electrónico
              <div class="email--container">
                <input type="email" name="correo" id="correo" required autocomplete="on">
              </div>
            </h5>
          </label>
          <label for="password">
            <h5>
              Contraseña
              <div class="password--container">
                <input type="password" name="password" id="password" required >
                <input type="button" id="showPassword--btn" onclick="mostrarContrasena()">
              </div>
            </h5>
          </label>
          <label type="submit" for="iniciarSesion">
            <button>Iniciar sesión</button>
          </label>
          <!-- <i>Ya sé que me falta algo, pero es mi versión 0.0.1</i> -->
        </form>
      </div>
    </div>
    `);
    // INICIAR SESIÓN
    const signInForm = document.querySelector("#iniciarSesion--Form");
    let modal = document.getElementById("modal--container");

    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(
        "#iniciarSesion--Form > label:nth-child(3) > button"
      ).style = "display: none";

      const correo = document.querySelector("#correo").value;
      const password = document.querySelector("#password").value;

      auth
        .signInWithEmailAndPassword(correo, password)
        .then((userCredential) => {
          document.querySelector("#iniciarSesion--btn > a > strong").innerHTML =
            "Cerrar Sesión";
          modal.remove();
          printModal(`
              <h1>Bienvenido ${auth.currentUser.email}</h1>
                `);
        })
        .catch((error) => {
          printModal(`
              <h2>Error al iniciar sesión => ${error}</h2>
              `);
          document.querySelector(
            "#iniciarSesion--Form > label:nth-child(3) > button"
          ).style = "display: block";
        });
    });
  }
});
