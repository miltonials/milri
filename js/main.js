const menu = document.querySelector('.rigth-menu');
const menu2 = document.querySelector('.left-menu');
const burgerButton = document.querySelector('#burger-menu');
const card = document.querySelector('.aside-container');
const tablet = window.matchMedia('screen and (max-width:812px)');

console.log(menu);

tablet.addListener(validation);

validation(tablet); //Para que funcione el burgerButton si se inicia desde <767px

function validation(event) {
    console.log(event.matches);
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow);
    }
    else {
        burgerButton.removeEventListener('click', hideShow);
    }
} 

function hideShow() {
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
        card.classList.remove('is-active');
        menu2.classList.remove('is-active');
    }
    else {
        menu.classList.add('is-active');
        card.classList.add('is-active');
        menu2.classList.add('is-active');
        burgerButton.classList.add('is-active');
        console.log(menu);
        console.log(menu2);
        console.log(card);
    }
}