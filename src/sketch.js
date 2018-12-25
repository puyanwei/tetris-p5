let canvas, tetromino;

function setup() {
    canvas = createCanvas(400, 800);
    centerCanvas();

    frameRate(5);
    tetromino = new Tetromino(0, 0);
}

function draw() {
    background(100);
    tetromino.show(50, 50);
    tetromino.update();
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}
