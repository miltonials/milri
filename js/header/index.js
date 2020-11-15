const header = () => {
    const el = `
    <i class="icon-menu burger-button" id="burger-menu"><span></span></i>
        <div class="header-container">
    <div class="navigations">
    <a href="https://miltonials.github.io/milri/#">
        <figure class="logo">
            <img src="https://miltonials.github.io/milri/assets/imgs/logo.png" alt="LOGO">
        </figure>
    </a>
    <nav class="left-menu">
        <ul>
            <li><a href="https://miltonials.github.io/milri/pages/allEvents.html/#">Eventos del mes</a></li>
            <li><a href="https://miltonials.github.io/milri/pages/game.html/#">Juego antiestresante</a></li>
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
    
    document.querySelector('header').innerHTML = el;
}
header();