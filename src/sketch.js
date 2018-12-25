let canvas;

function setup() {
    canvas = createCanvas(400, 800);
    background(100);
    centerCanvas();
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function draw() {}
