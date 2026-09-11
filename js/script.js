const startButton = document.getElementById("comenzar");
const story = document.getElementById("historia");
const intro = document.querySelector(".intro");
const annaSprite = document.getElementById("anna-sprite");

startButton.addEventListener("click", function() {

    intro.classList.add("ocultar");

    story.classList.add("activa");

    story.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        if (annaSprite) {
            annaSprite.classList.add("anna-visible");
        }
    }, 500);

});