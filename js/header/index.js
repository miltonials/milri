const header = () => {
    const headerContainer = document.querySelector('.header-container');
    const el = `
    <div class="navigations">
    <a href="#">
        <figure class="logo">
            <img src="./assets/imgs/yo.png" alt="LOGO">
        </figure>
    </a>
    <nav class="left-menu">
        <ul>
            <li><a href="./pages/allEvents/allEvents.html">Eventos del mes</a></li>
            <li><a href="#">Juego antiestresante</a></li>
        </ul>
    </nav>
    <nav class="rigth-menu">
        <ul>
            <li id="agendarEvennt--btn" class="logged-out" style="display: none;">
                <a href="#"> Agendar un evento</a>
            </li>
            <li id="miActividad--btn" class="logged-out" style="display: none;">
                <a href="#">
                    Mi actividad <span class="actividad-icon"></span>
                </a>
            </li>
            <li id="iniciarSesion--btn" class="logged-in">
                <a href="#">
                    <strong >Cargando</strong><span class="iniciarSesion-icon"></span>
                </a>
            </li>
        </ul>
    </nav>
    </div>
    `;
    
    headerContainer.innerHTML = el;
}
header();