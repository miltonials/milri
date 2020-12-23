const header = () => {
    const el = `
    <i class="icon-menu burger-button" id="burger-menu"><span></span></i>
        <div class="header-container">
    <div class="navigations">
    <a href="./">
        <figure class="logo">
            <img src="./assets/imgs/isotipo.png" alt="LOGO">
        </figure>
    </a>
    <nav class="left-menu">
        <ul>
            <li><a href="./mes.html#">Eventos del mes</a></li>
            <li><a href="./game.html#">Juego antiestresante</a></li>
        </ul>
    </nav>
    <nav class="rigth-menu">
        <ul>
            <li id="agendarEvennt--btn" class="logged-out" style="display: none;">
                <a href="#"> Agendar un evento</a>
            </li>
            <li id="miActividad--btn" class="logged-out" style="display: none;">
                <a href="./actividad.html">
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

export default header;