const pikachu = document.querySelector(".pikachu-gif");
const pokeball = document.querySelector(".pokeball-gif");
const clouds = document.querySelector(".clouds");

const gameContent = document.querySelector(".game-content");
const gameOverScreen = document.querySelector(".game-over");

const jump = () => {
    pikachu.classList.add("jump");

    setTimeout(() => {
        pikachu.classList.remove("jump");
    }, 500);
};

const gameOver = () => {
    const cloudsPosition = clouds.offsetLeft;

    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window
        .getComputedStyle(pikachu)
        .bottom.replace("px", "");

    if (
        pokeballPosition <= 145 &&
        pokeballPosition > 0 &&
        pikachuPosition < 65
    ) {
        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        pokeball.style.animation = "none";
        pokeball.style.left = `${pokeballPosition}px`;
        pokeball.src = "../assets/pokeball-game-over.png";

        pikachu.style.animation = "none";
        pikachu.style.bottom = `${pikachuPosition}px`;
        pikachu.src = "../assets/pikachu-game-over.png";

        gameContent.style.filter = "blur(5px)";
        gameOverScreen.style.visibility = "visible";

        clearInterval(gameOver);
    }
};

document.addEventListener("keydown", jump);

document.querySelector(".restart-button").addEventListener("click", () => {
    gameContent.style.filter = "none";
    gameOverScreen.style.visibility = "hidden";

    clouds.style = "none";

    pikachu.style = "none";
    pikachu.src = "../assets/pikachu-gif.gif";

    pokeball.style = "none";
    pokeball.src = "../assets/pokeball-gif.gif";
});

setInterval(gameOver, 10);
