const footer = () => {
    const el = `
        <section class="footer-container">
            <div class="footer-information">
            <ul class="information-links">
                <a href=""><li><span>Acerca de</span></li></a>
                <a href=""><li><span>Funcionalidades</span></li></a>
                <a href=""><li><span>¿Cómo colaborar?</span></li></a>
                <a href="./license.html"><li><span>Licencia</span></li></a>
            </ul>
            <div class="social-links">
                <span>MILRI 2020</span>
                <span>REDES SOCIALES</span>
            </div>
            </div>
        </section>
    `;
    document.querySelector('footer').innerHTML += el;
    }
    footer();