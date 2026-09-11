const startButton = document.getElementById("comenzar");
const story = document.getElementById("historia");
const intro = document.querySelector(".intro");
const annaSprite = document.getElementById("anna-sprite");
const dialogText = document.getElementById("dialog-text");

// Texto de la primera escena
const textoEscena = "“¿Mamá? ¿Papá?”";

startButton.addEventListener("click", function() {
    // 1. Ocultar la pantalla de inicio
    intro.classList.add("ocultar");

    // 2. Activar la sección de historia
    story.classList.add("activa");

    // 3. Scroll suave a la historia
    story.scrollIntoView({
        behavior: "smooth"
    });

    // 4. Hacer aparecer a Anna
    setTimeout(() => {
        if (annaSprite) {
            annaSprite.classList.add("anna-visible");
        }
        
        // 5. Iniciar efecto de máquina de escribir en el diálogo
        escribirTexto(dialogText, textoEscena, 50);
    }, 600);
});

// Función para el efecto de máquina de escribir
function escribirTexto(elemento, texto, velocidad) {
    elemento.innerHTML = "";
    let i = 0;
    
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidad);
}