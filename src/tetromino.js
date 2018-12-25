class Tetromino {
    constructor(x, y) {
        this.shape = createVector(x, y);
        this.xDir = 0;
        this.yDir = 1;
    }

    show(height, width) {
        fill(0);
        rect(this.shape.x, this.shape.y, height, width);
    }

    update() {
        this.shape.x += this.xDir;
        this.shape.y += this.yDir;
    }
}
