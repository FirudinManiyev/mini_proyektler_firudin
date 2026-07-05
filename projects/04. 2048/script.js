const board = document.getElementById("board");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

const SIZE = 4;

let grid = [];
let score = 0;

// Başlat
init();

restartBtn.addEventListener("click", init);

document.addEventListener("keydown", handleKey);

function init() {

    score = 0;
    scoreEl.textContent = score;

    grid = Array.from({ length: SIZE }, () =>
        Array(SIZE).fill(0)
    );

    addRandomTile();
    addRandomTile();

    drawBoard();

}

function drawBoard() {

    board.innerHTML = "";

    for (let r = 0; r < SIZE; r++) {

        for (let c = 0; c < SIZE; c++) {

            const tile = document.createElement("div");

            tile.className = "tile";

            const value = grid[r][c];

            if (value !== 0) {

                tile.textContent = value;
                tile.classList.add(`tile-${value}`);

            }

            board.appendChild(tile);

        }

    }

}

function addRandomTile() {

    const empty = [];

    for (let r = 0; r < SIZE; r++) {

        for (let c = 0; c < SIZE; c++) {

            if (grid[r][c] === 0) {

                empty.push({ r, c });

            }

        }

    }

    if (empty.length === 0) return;

    const random = empty[Math.floor(Math.random() * empty.length)];

    grid[random.r][random.c] =
        Math.random() < 0.9 ? 2 : 4;

}

function slide(row) {

    row = row.filter(n => n);

    for (let i = 0; i < row.length - 1; i++) {

        if (row[i] === row[i + 1]) {

            row[i] *= 2;

            score += row[i];

            row[i + 1] = 0;

        }

    }

    row = row.filter(n => n);

    while (row.length < SIZE) {

        row.push(0);

    }

    return row;

}

function moveLeft() {

    let changed = false;

    for (let r = 0; r < SIZE; r++) {

        const old = [...grid[r]];

        grid[r] = slide(grid[r]);

        if (old.toString() !== grid[r].toString()) {

            changed = true;

        }

    }

    return changed;

}

function reverseRows() {

    grid = grid.map(row => row.reverse());

}

function transpose() {

    grid = grid[0].map((_, c) =>
        grid.map(row => row[c])
    );

}

function moveRight() {

    reverseRows();

    const changed = moveLeft();

    reverseRows();

    return changed;

}

function moveUp() {

    transpose();

    const changed = moveLeft();

    transpose();

    return changed;

}

function moveDown() {

    transpose();

    const changed = moveRight();

    transpose();

    return changed;

}

function handleKey(e) {

    let moved = false;

    switch (e.key) {

        case "ArrowLeft":
            moved = moveLeft();
            break;

        case "ArrowRight":
            moved = moveRight();
            break;

        case "ArrowUp":
            moved = moveUp();
            break;

        case "ArrowDown":
            moved = moveDown();
            break;

        default:
            return;

    }

    if (moved) {

        addRandomTile();

        scoreEl.textContent = score;

        drawBoard();

    }

}