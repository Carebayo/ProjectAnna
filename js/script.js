const startButton = document.getElementById("comenzar");
const story = document.getElementById("historia");
const intro = document.querySelector(".intro");

startButton.addEventListener("click", function() {

    intro.classList.add("ocultar");

    story.classList.add("activa");

    story.scrollIntoView({
        behavior: "smooth"
    });

});