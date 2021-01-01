function getEventsUser() {
  if (auth.currentUser) {
    const onGetEventsUser = (callback) =>
    fs
    .collection("evento")
    .orderBy("publicado", "desc")
    .where("userEmail", "==", auth.currentUser.email)
    .onSnapshot(callback);
    let eventsUserContainer =eventsUserContainer;
        
    onGetEventsUser((querySnapshot) => {
      if (querySnapshot.empty) {
       eventsUserContainer = `
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
          const event = doc.data();
          event.id = doc.id;

          const cardTemplate = `
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
          html += cardTemplate;
        });
       eventsUserContainer = html;

        // btnFuncion

        const deleteBtn = document.querySelectorAll(".eliminar--btn");
        const editBtn = document.querySelectorAll(".editar--btn");

        deleteBtn.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            deleteEvent(e.target.dataset.id);
          });
        });

        editBtn.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            
            btn.style = "display: none";
            editStatus = true;
            const doc = await editEvent(e.target.dataset.id);
            id = doc.id;
            const docData = doc.data();
            
            let scheduleEventBtn = document.querySelector("#agendarEvennt--btn");
            scheduleEventBtn.click();
            btn.style = "display: inline-block";
            
              agendarEvento["eventTittle--container"].value = docData.title;
              agendarEvento["eventDescription"].value = docData.description;
              agendarEvento["fecha"].value = docData.fecha;
              document.querySelector("#agendar--btn").innerHTML = "Actualizar";
          });
        });
        // btnFuncion
      }
    });
  } else {
   eventsUserContainer = "";
    const card = `
        <h2 class="noLogin">Inicia sesión</h2>
        `;
   eventsUserContainer += card;
  }
}

auth.onAuthStateChanged((user) => {
  getEventsUser();
});

function deleteEvent(id) {
  fs.collection("evento").doc(id).delete();
}
const editEvent = (id) => fs.collection("evento").doc(id).get();
const updateEvento = (id, updateEvento) =>
  fs.collection("evento").doc(id).update(updateEvento);
