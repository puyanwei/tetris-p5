let canvas, tetromino;

function setup() {
    canvas = createCanvas(400, 800);
    centerCanvas();

    frameRate(500);
    tetromino = new Tetromino(0, 0, 40, 40);
}

function draw() {
    background(100);
    tetromino.show();
    tetromino.update();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        tetromino.setDir(-1, 0);
    }
    if (keyCode === RIGHT_ARROW) {
        tetromino.setDir(1, 0);
    }
    if (keyCode === DOWN_ARROW) {
        tetromino.setDir(0, 1);
    }
    if (keyCode === UP_ARROW) {
        tetromino.setDir(0, -1);
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
