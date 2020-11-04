// obtener fecha
let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let f=new Date();
console.log(meses[f.getMonth()]);

/*DARK-THEME*/
const bodyColors = document.querySelector('#body');

/*NAVBAR*/
const rigth_menu = document.querySelector('.rigth-menu');
const left_menu = document.querySelector('.left-menu');
const logo = document.querySelector('.logo');
const burgerButton = document.querySelector('#burger-menu');
const card = document.querySelector('.aside-container');
const tablet = window.matchMedia('screen and (max-width:812px)');

tablet.addListener(validation);

validation(tablet); //Para que funcione el burgerButton si se inicia desde <767px

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow);
    }
    else {
        burgerButton.removeEventListener('click', hideShow);
    }
} 

function hideShow() {
    if (rigth_menu.classList.contains('is-active')){
        bodyColors.classList.remove('is-active');
        logo.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
        rigth_menu.classList.remove('is-active');
        left_menu.classList.remove('is-active');
        card.classList.remove('is-active');
    }
    else {
        bodyColors.classList.add('is-active')
        logo.classList.add('is-active');
        burgerButton.classList.add('is-active');
        rigth_menu.classList.add('is-active');
        left_menu.classList.add('is-active');
        card.classList.add('is-active');
    }
}

// MODAL DE SIGNIN

// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
  }
};
// Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
  };
  
//   imprimir modal
const printModal = (content) => {
    // crear contenedor interno
    const modalContentEl = createCustomElement('div', {
        id: 'content--modal',
        class: 'content--modal',
    }, [content])
    // crear contenedor principal
    const modalContainerEl = createCustomElement('section', {
        id: 'modal--container',
        class: 'modal--container',
    }, [modalContentEl]);

    // Imprimir modal
    document.body.appendChild(modalContainerEl);
    // remover modal
    const removeModal =  () => {
      document.body.removeChild(modalContainerEl)
    };
    
    modalContainerEl.addEventListener('click', e => {
      if (e.target === modalContainerEl) {
        removeModal();
      }
    })
}

// printModal (`<h1>hola mundo</h1>`);

document.getElementById('miActividad--btn').addEventListener('click', () => {
    printModal(`
    <h2>Agregar el modal de actividad</h2>
    `);
  })
  document.getElementById('agendarEvennt--btn').addEventListener('click', () => {
    printModal(`
    <h2>Agregar el modal de agendar evento</h2>
    `);
  })  
document.getElementById('iniciarSesion--btn').addEventListener('click', () => {
    printModal(`
    <div class="iniciarSesion--container">
      <div class="iniciarSesion__information--container">
        <h2>Iniciar sesion</h2>
        <p>¡Hola! Si tienes una cuenta MILRI inicia sesión</p>
        <form action="iniciarSesion">
          <label for="correo">
            <p>Correo</p>
            <input type="text" name="correo" id="correo" placeholder="Digita tu correo">
          </label>
          <label for="password">
            <p>Contraseña</p>
            <input type="password" name="password" id="password" placeholder="Digita tu contraseña">
          </label>
          <label type="submit" for="iniciarSesion">
            <button>Iniciar sesión</button>
          </label>
          <!-- <i>Ya sé que estoy feo, pero es mi versión 0.0.1</i> -->
        </form>
      </div>
    </div>
    `);
  })
  //   requisitos y valor de una patente comercial de textiles
  
// 27584444 ext120

// dinna clark