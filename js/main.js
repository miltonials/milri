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
        logo.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
        rigth_menu.classList.remove('is-active');
        left_menu.classList.remove('is-active');
        card.classList.remove('is-active');
    }
    else {
        logo.classList.add('is-active');
        burgerButton.classList.add('is-active');
        rigth_menu.classList.add('is-active');
        left_menu.classList.add('is-active');
        card.classList.add('is-active');
    }
}