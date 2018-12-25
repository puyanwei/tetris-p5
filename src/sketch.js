let canvas, tetromino, gridSize, board;
let fallingTetominoes = new Array();

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
    background(100);
    fallingTetominoes[0].update();
    fallingTetominoes[0].show();
    if (fallingTetominoes[0].hasLanded()) {
        // board.update(fallingTetominoes[0].x, fallingTetominoes[0].y)
        fallingTetominoes.pop(1);
        createTetrimino();
    }
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
    fallingTetominoes.push(piece);
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}
