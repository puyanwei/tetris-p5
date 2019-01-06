let canvas, tetromino, gridSize, board;
let fallingShapes = new Array();

function setup() {
	canvas = createCanvas(400, 800);
	centerCanvas();
	frameRate(5); // Initial speed of level

	gridSize = 40;
	board = new Board(width / gridSize, height / gridSize);
	board.initialize();
	createShape();
}

function draw() {
	let fallingShape = fallingShapes[0];
	background(100);
	fallingShape.update();
	fallingShape.show();
	checkIfLanded(fallingShape);
	// board.show();
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

function createShape() {
	let piece = new Tetromino(width / 2 - gridSize, -gridSize, gridSize, gridSize);
	fallingShapes.push(piece);
}

function checkIfLanded(fallingShape) {
	if (fallingShape.hasLanded()) {
		board.update(fallingShape.x, fallingShape.y);
		// TODO gotta move this tetromino object to the board object
		console.log(this.board.grid);
		fallingShapes.pop(1);
		noLoop();
		// createShape();
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
