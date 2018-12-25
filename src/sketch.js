let canvas, tetromino, gridSize;
let board = new Array();
let currentTetominoes = new Array();

function setup() {
    canvas = createCanvas(440, 800);
    centerCanvas();

    frameRate(5); // Initial speed of level
    gridSize = 40;
    createTetrimino();
}

function draw() {
    background(100);
    currentTetominoes[0].show();
    currentTetominoes[0].update();
    console.log(currentTetominoes[0].hasLanded());
    if (currentTetominoes[0].hasLanded()) {
        currentTetominoes.pop(1);
        createTetrimino();
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        tetromino.setDir(-gridSize, 0);
    }
    if (keyCode === RIGHT_ARROW) {
        tetromino.setDir(gridSize, 0);
    }
    if (keyCode === DOWN_ARROW) {
        tetromino.setDir(0, gridSize * 2);
    }
    if (keyCode === UP_ARROW) {
        // TODO goes straight to bottom
    }
}

function createTetrimino() {
    let piece = new Tetromino(width / 2 - gridSize, 0, gridSize, gridSize);
    currentTetominoes.push(piece);
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}
