const startButton = document.getElementById("comenzar");
const story = document.getElementById("historia");
const intro = document.querySelector(".intro");
const annaSprite = document.getElementById("anna-sprite");

startButton.addEventListener("click", function() {
    // 1. Ocultar la pantalla de inicio suavemente
    intro.classList.add("ocultar");

    // 2. Activar la sección de la historia
    story.classList.add("activa");

    // 3. Scroll hacia la historia
    story.scrollIntoView({
        behavior: "smooth"
    });

    // 4. Hacer que Anna aparezca con animación
    setTimeout(() => {
        if (annaSprite) {
            annaSprite.classList.add("anna-visible");
        }
    }, 400);
});