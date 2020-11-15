const footer = () => {
    const footerContainer = document.querySelector('.footer-container');
    const el = `
    <div class="footer-information">
    <figure class="logo">
        <a href="#">
            <img src="./assets/imgs/yo.png" alt="LOGO">
        </a>
        </figure>
    <ul class="information-links">
        <a href=""><li><span>Acerca de</span></li></a>
        <a href=""><li><span>Funcionalidades</span></li></a>
        <a href=""><li><span>¿Cómo colaborar?</span></li></a>
        <a href=""><li><span>Licencia</span></li></a>
    </ul>
    <div class="social-links">
        <span>MILRI 2020</span>
        <span>REDES SOCIALES</span>
    </div>
    </div>
    `;
        footerContainer.innerHTML += el;
    }
    footer();