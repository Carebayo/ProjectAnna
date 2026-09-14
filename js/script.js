// CONTROLES DE LA HISTORIA
const startButton = document.getElementById("comenzar");
const story = document.getElementById("historia");
const intro = document.querySelector(".intro");

const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const pageIndicator = document.getElementById("page-indicator");

let currentPage = 1;
const totalPages = 3;

startButton.addEventListener("click", function() {
    intro.classList.add("ocultar");
    story.classList.add("activa");
});

// Transición suave entre páginas
function goToPage(nextPageNumber) {
    const currentPageEl = document.getElementById(`page-${currentPage}`);
    const nextPageEl = document.getElementById(`page-${nextPageNumber}`);

    // Animación de salida
    currentPageEl.classList.remove("active");
    currentPageEl.classList.add("slide-out-left");

    setTimeout(() => {
        currentPageEl.classList.remove("slide-out-left");
        currentPageEl.style.display = "none";

        // Animación de entrada
        nextPageEl.style.display = "block";
        setTimeout(() => {
            nextPageEl.classList.add("active");
        }, 20);

        currentPage = nextPageNumber;
        updateControls();
    }, 300);
}

btnNext.addEventListener("click", function() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
});

btnPrev.addEventListener("click", function() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

function updateControls() {
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;

    btnPrev.disabled = (currentPage === 1);

    if (currentPage === totalPages) {
        btnNext.textContent = "Fin del Cap. 1";
        btnNext.disabled = true;
    } else {
        btnNext.textContent = "Siguiente";
        btnNext.disabled = false;
    }
}

// GENERADOR DE BURBUJAS INTERACTIVAS
const bubblesContainer = document.getElementById("bubbles-container");
const totalBubbles = 20;

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio entre 15px y 50px
    const size = Math.floor(Math.random() * 35) + 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Posición horizontal aleatoria
    bubble.style.left = `${Math.random() * 95}%`;

    // Duración y retraso de animación aleatorios
    const duration = Math.random() * 6 + 7; // entre 7s y 13s
    bubble.style.animationDuration = `${duration}s`;

    // Evento para que EXPLOTE al hacer clic o al pasar el ratón
    const popBubble = () => {
        if (!bubble.classList.contains("pop")) {
            bubble.classList.add("pop");
            setTimeout(() => {
                bubble.remove();
                createBubble(); // Crea una nueva burbuja para reponerla
            }, 300);
        }
    };

    bubble.addEventListener("click", popBubble);
    bubble.addEventListener("mouseenter", popBubble);

    bubblesContainer.appendChild(bubble);
}

// Inicializar burbujas
for (let i = 0; i < totalBubbles; i++) {
    setTimeout(createBubble, i * 300);
}