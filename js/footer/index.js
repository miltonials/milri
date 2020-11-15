const footer = () => {
    const footerContainer = document.querySelector('.footer-container');
    const el = `
    <div class="footer-information">
    <figure class="logo">
        <a href="https://miltonials.github.io/milri/#">
            <img src="https://miltonials.github.io/milri/assets/imgs/logo.png" alt="LOGO">
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