document.addEventListener("DOMContentLoaded", function() {
    const footer = `
    <div class="footer">
        <!-- Aquí iría el contenido HTML completo del footer -->
        <div class="contenedor_general">
            <div class="nosotros">
                <a href="../index.html" class="link_container-lc1">
                    <div class="logo">
                        <img src="../assets/imgs/icono_claro_1.png" alt="Logo de la pagina web" class="lc1" />
                    </div>
                    <span> Tech World </span>
                </a>
                <p>
                    En Tech World, somos una comunidad dedicada al mundo gamer
                    y la tecnología. Ofrecemos productos novedosos y exclusivos
                    para mejorar tu experiencia de juego. Ya seas un jugador
                    casual o experto, aquí encontrarás todo lo necesario para
                    estar al día y optimizar tu setup.
                    <strong>¡Únete a Tech World!</strong>
                </p>
            </div>
            <div class="redes">
                <h3>Síguenos</h3>
                <div class="iconos_redes">
                    <!-- Aquí van los iconos de redes sociales -->
                </div>
            </div>
        </div>
        <div class="contact">
            <span class="contenedor_logo_contacto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <h3>Hablemos!</h3>
            </span>
            <form>
                <label class="form_input">
                    <span>Nombre de contacto</span>
                    <input type="text" placeholder="Brayan Manrique" />
                </label>
                <label class="form_input">
                    <span>Email</span>
                    <input type="email" placeholder="ejemplo@gmail.com" />
                </label>
                <label class="form_input">
                    <span>Mensaje</span>
                    <textarea placeholder="Deja tu mensaje"></textarea>
                </label>
                <button>Enviar</button>
            </form>
        </div>
    </div>
    `;
    
    document.querySelector("footer").innerHTML = footer;
});
