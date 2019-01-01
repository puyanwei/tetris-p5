let canvas, tetromino, gridSize, board;
let fallingTetrominoes = new Array();

function setup() {
    canvas = createCanvas(400, 800);
    centerCanvas();

    gridSize = 40;
    board = new Board(width / gridSize, height / gridSize);
    frameRate(5); // Initial speed of level
    board.initialize();
    createTetrimino();
}

function draw() {
    let fallingTetromino = fallingTetrominoes[0];
    background(100);
    fallingTetromino.update();
    fallingTetromino.show();
    checkIfLanded(fallingTetromino);
    board.show();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        fallingTetominoes[0].setDir(-gridSize, 0);
    }
    if (keyCode === RIGHT_ARROW) {
        fallingTetominoes[0].setDir(gridSize, 0);
    }
    if (keyCode === DOWN_ARROW) {
        fallingTetominoes[0].setDir(0, gridSize * 2);
    }
    if (keyCode === UP_ARROW) {
        // TODO goes straight to bottom
    }
}

function createTetrimino() {
    let piece = new Tetromino(
        width / 2 - gridSize,
        -gridSize,
        gridSize,
        gridSize
    );
    fallingTetrominoes.push(piece);
}

function checkIfLanded(fallingTetromino) {
    if (fallingTetromino.hasLanded()) {
        board.update(fallingTetromino.x, fallingTetromino.y);
        fallingTetrominoes.pop(1);
        // TODO gotta move this tetromino object to the board object
        // board.update()
        createTetrimino();
    }
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}
