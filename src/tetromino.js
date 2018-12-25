class Tetromino {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.xDir = 0;
        this.yDir = gridSize;
    }

    setDir(x, y) {
        this.xDir = x;
        this.yDir = y;
    }

    show() {
        fill(0);
        rect(this.x, this.y, this.height, this.width);
    }

    update() {
        this.x += this.xDir;
        this.xDir = 0;
        this.y += this.yDir;
        this.yDir = gridSize;
        this.constrainToBorders();
        this.hasLanded()
            ? new Tetromino(width / 2 - gridSize, 0, gridSize, gridSize)
            : null;
    }

    constrainToBorders() {
        this.x = constrain(this.x, 0, width - this.width);
        this.y = constrain(this.y, 0, height - this.height);
    }

    hasLanded() {
        return this.y >= height - this.height;
    }
}
