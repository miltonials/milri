function obtenerEventosUsuario() {
  if (auth.currentUser) {
    const onGetEventsUser = (callback) =>
      fs
        .collection("evento")
        .orderBy("publicado", "desc")
        .where("userEmail", "==", auth.currentUser.email)
        .onSnapshot(callback);

    onGetEventsUser((querySnapshot) => {
      if (querySnapshot.empty) {
        document.querySelector(".eventos_usuario--container").innerHTML = `
                    <div class="card event">
                    <figure class="card-image">
                    <img src="./assets/imgs/imagotipo.png" alt="Imagen de un evento" >
                    </figure>
                  <div class="card-information">
                  <h2 class="title">NO HAY EVENTOS</h2>
                  <p>PUBLICA TU PRIMER EVENTO</p>
                  </div>
                  </div>`;
      } else {
        let html = "";
        querySnapshot.forEach((doc) => {
          const evento = doc.data();
          evento.id = doc.id;

          const card = `
          <div class="card event">
              <figure class="card-image">
              <img src="${evento.imgLink}" alt="Imagen de un evento" >
              </figure>
              <div class="card-information">
              <h2 class="title">${evento.title}</h2>
              <p>${evento.description} <br />
                <i class="fecha--container">
                  Publicado el: ${evento.publicado} <br />
                  Fecha del evento: ${evento.fecha}
                </i>
              </p>
              <section class="btns--container">
                <button class="eliminar--btn" data-id="${evento.id}">Eliminar</button>
                <button class="editar--btn" data-id="${evento.id}">Editar</button>
              </section>
              </div>
            </div>
              `;
          html += card;
        });
        document.querySelector(".eventos_usuario--container").innerHTML = html;

        // btnFuncion

        const btn_eliminar = document.querySelectorAll(".eliminar--btn");
        const btn_editar = document.querySelectorAll(".editar--btn");

        btn_eliminar.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            eliminarEvento(e.target.dataset.id);
          });
        });

        btn_editar.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            
            btn.style = "display: none";
            editStatus = true;
            const doc = await editarEvento(e.target.dataset.id);
            id = doc.id;
            const docData = doc.data();
            
            let agendarEvento_btn = document.querySelector("#agendarEvennt--btn");
            agendarEvento_btn.click();
            btn.style = "display: inline-block";
            
            // setTimeout(() => {
              agendarEvento["eventTittle--container"].value = docData.title;
              agendarEvento["eventDescription"].value = docData.description;
              agendarEvento["fecha"].value = docData.fecha;
              document.querySelector("#agendar--btn").innerHTML = "Actualizar";
            // }, 1000);
          });
        });
        // btnFuncion
      }
    });
  } else {
    document.querySelector(".eventos_usuario--container").innerHTML = "";
    const card = `
        <h2 class="noLogin">Inicia sesión</h2>
        `;
    document.querySelector(".eventos_usuario--container").innerHTML += card;
  }
}

auth.onAuthStateChanged((user) => {
  obtenerEventosUsuario();
});

function eliminarEvento(id) {
  fs.collection("evento").doc(id).delete();
}
const editarEvento = (id) => fs.collection("evento").doc(id).get();
const updateEvento = (id, updateEvento) =>
  fs.collection("evento").doc(id).update(updateEvento);
