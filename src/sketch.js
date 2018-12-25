let canvas, tetromino, gridSize;

function setup() {
    canvas = createCanvas(440, 800);
    centerCanvas();

    frameRate(5); // Initial speed of level
    gridSize = 40;
    tetromino = new Tetromino(width / 2 - gridSize, 0, gridSize, gridSize);
}

function draw() {
    background(100);
    tetromino.show();
    tetromino.update();
    console.log(tetromino.xDir, tetromino.yDir, tetromino.x, tetromino.y);
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
        // goes straight to bottom
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
