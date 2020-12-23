const footer = () => {
  const el = `
        <section class="footer-container">
            <div class="footer-information">
                <ul class="information-links">
                    <li><a href="#"><span>Acerca de</span></a></li>
                    <li><a href="#"><span>Funcionalidades</span></a></li>
                    <li><a href="#"><span>¿Cómo colaborar?</span></a></li>
                    <li><a href="./license.html"><span>Licencia</span></a></li>
                </ul>
                <div class="social-links">
                    <span>MILRI 2020</span>
                    <span>REDES SOCIALES</span>
                </div>
            </div>
        </section>
    `;
  document.querySelector("footer").innerHTML += el;
};

export default footer;