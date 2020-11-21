const miActividad = document.getElementById("miActividad--btn");
const egendar_evento = document.getElementById("agendarEvennt--btn");
const iniciarSesion_btn = document.getElementById("iniciarSesion--btn");

const obtenerFecha = (timeStamp) => {
  const d = new Date(timeStamp);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

const crearEvento = (
  title,
  description,
  imgLink,
  fecha,
  userEmail,
  userUID,
  publicado,
) =>
  fs
    .collection("evento")
    .doc()
    .set({
      title,
      description,
      imgLink,
      userEmail: auth.currentUser.email,
      userUID: auth.currentUser.uid,
      publicado: obtenerFecha(new Date()),
      fecha,
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
        <label for="imgEvento">
          <input type="file" name="imgEvento" id="imgEvento" placeholder="Selecciona una imagen">
          <span><h5 class="advertencia">Solo imágenes de tamaño máximo 5MB</h5></span>
        </label>
        <label for="eventDescription--container">
          <h5>Descripción del evento</h5>
          <textarea name="eventDescription" id="eventDescription" cols="30" rows="10" required></textarea>
        </label>
          <label for="fecha">
            <h5>¿Cuándo es será el evento?</h5>
            <input type="datetime-local" id="fecha" required>
        </label>
        <label type="submit" for="subirEvento">
          <button id="agendar--btn">Agendar</button>
        </label>
        <div class="progress--container">
        <progress id="progress--bar"></progress>
        </div>
      </form>
    </div>
      `);
  } else {
    alert("Primero debes iniciar sesión.");
  }

  // let modal = document.getElementById("modal--container");

  const agendarEvento = document.querySelector("#agendarEvento");

  agendarEvento.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelector("#agendar--btn").style = "display: none;";

    const title = agendarEvento["eventTittle--container"];
    const description = agendarEvento["eventDescription"];
    const fecha = agendarEvento["fecha"];
    // const img = agendarEvento["imgEvento"];
    const img = document.querySelector("#imgEvento");

    if (img.files[0]) {
      let urlImg = "";
      const file = img.files[0];
      const refStorage = storage.ref(
        `imgEvento/${auth.currentUser.email}/${file.name}`
      );
      const task = refStorage.put(file);
      const titlevalue = agendarEvento["eventTittle--container"].value;
      const descriptionvalue = agendarEvento["eventDescription"].value;
      const fecha = agendarEvento["fecha"].value;

      task.on(
        "state_changed",
        (snapshot) => {
          const progress = document.getElementById("progress--bar");
          const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes;
          console.log(porcentaje);
          progress.value = porcentaje;
        },
        (err) => {
          alert(`Error subiendo archivo = > ${err.message}`, 4000);
          document.querySelector("#agendar--btn").style = "display: block;";
        },
        () => {
          task.snapshot.ref
            .getDownloadURL()
            .then((url) => {
              console.log(title.value, description.value);
              sessionStorage.setItem("evento", url);
              urlImg = url;
              crearEvento(titlevalue, descriptionvalue, urlImg, fecha);
              document.querySelector("#agendar--btn").style = "display: block;";
              agendarEvento.reset();
            title.focus();
            })
            .catch((err) => {
              alert(`Error obteniendo downloadURL = > ${err}`, 4000);
              document.querySelector("#agendar--btn").style = "display: block;";
              title.focus();
            });
        }
      );
    } else {
      crearEvento(
        title.value,
        description.value,
        "./assets/imgs/imagotipo.png",
        fecha.value
      );
      document.querySelector("#agendar--btn").style = "display: block;";

      agendarEvento.reset();
      title.focus();
    }
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
        const card = `
        <div class="card event">
              <figure class="card-image">
              <img src="../assets/icons/signIn.svg" alt="Imagen de un evento" >
              </figure>
              <div class="card-information">
              <h2 class="title">NO HAY EVENTOS</h2>
              <p>NO HAY EVENTOS</p>
              </div>
          </div>`;
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
        document
          .querySelector("#miActividad--btn > a")
          .classList.add("verTodosEventos");
        document.querySelector("#miActividad--btn > a").innerHTML =
          "verTodosEventos";
      }
    });
    //   `);
  } else {
    alert("Primero debes iniciar sesión.");
  }

  document.querySelector(".verTodosEventos").addEventListener(
    "click",
    onGetEvents((querySnapshot) => {
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
        document
          .querySelector("#miActividad--btn > a")
          .classList.remove("verTodosEventos");
        document.querySelector("#miActividad--btn > a").innerHTML =
          "Mi actividad";
      });
      eventList.innerHTML = html;
    })
  );
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
