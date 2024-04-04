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
    win();
}
function newGame() {
    step = false;
    count = 0;
    res.innerText = '';
    game.innerHTML = '';
    grid();
}

function stepCross(target) {
    if (target.textContent === "") {
        target.textContent = "X";
        count++;
    } else {
        stepZero(target);
    }
}
function stepZero(target) {
    if (target.textContent === "") {
        target.textContent = "O";
        count++;
    } else {
        stepCross(target);
    }
function win() {
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < comb.length; i++) {
        const cells = document.querySelectorAll(".cells");
        if (cells[comb[i][0]].textContent === "X" &&
            cells[comb[i][1]].textContent === "X" &&
            cells[comb[i][2]].textContent === "X") {
            cells[comb[i][0]].classList.add('active');
            cells[comb[i][1]].classList.add('active');
            cells[comb[i][2]].classList.add('active');
            res.innerText = 'Winner is X';
            game.removeEventListener('click', init);
        }

        else if (cells[comb[i][0]].textContent === "O" &&
            cells[comb[i][1]].textContent === "O" &&
            cells[comb[i][2]].textContent === "O") {
            cells[comb[i][0]].classList.add('active');
            cells[comb[i][1]].classList.add('active');
            cells[comb[i][2]].classList.add('active');
            res.innerText = 'Winner is O';
            game.removeEventListener('click', init);
        } else if (count == 9) {
            res.innerText = `It's a Draw`;
            game.removeEventListener('click', init);
        }
    }
}

