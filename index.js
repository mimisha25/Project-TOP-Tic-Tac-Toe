let game = document.querySelector('.game'),
    res = document.querySelector('.res'),
    btnGame = document.querySelector('.new-game'),
    step = false,
    count = 0

btnGame.addEventListener("click", grid);
function grid() {
    for (let i = 0; i <= 8; i++) {
        const cells = document.createElement("div");
        cells.classList.add("cells");
        game.appendChild(cells);
    }

}
