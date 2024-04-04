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
    game.addEventListener('click', init);
    document.querySelector("body").removeChild(btnGame);
    const restart = document.createElement("button");
    restart.classList.add("restart");
    document.querySelector("body").appendChild(restart);
    restart.textContent = "Restart";
  
}
game.addEventListener('click', init);
function init(e) {
    if (step === true){
        stepCross(e.target);
    } else {
        stepZero(e.target);
    } 
    step = !step;
}
