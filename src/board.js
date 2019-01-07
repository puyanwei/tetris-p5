class Board {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.grid;
    }

    initialize() {
        this.grid = Array.from({ length: this.rows }, () =>
            Array.from({ length: this.columns }, () => {
                return new Cell();
            })
        );
        console.log(this.grid);
    }

    update(cellX, cellY) {
        let indexX = cellX / gridSize;
        let indexY = cellY / gridSize;
        this.grid[indexY][indexX].taken = true;
        console.log(indexX, indexY, this.grid);
    }

    show() {
        this.grid.map((row, rowIndex) => {
            row.map((singleCell, colIndex) => {
                singleCell.taken ? fill(255) : noFill();
                rect(
                    colIndex * gridSize,
                    rowIndex * gridSize,
                    gridSize,
                    gridSize
                );
            });
        });
    }
}
