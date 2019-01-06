class Board {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.grid;
    }

    initialize() {
        let cell = new Cell();
        let colsArray = new Array(this.columns).fill(cell);
        this.grid = new Array(this.rows).fill(colsArray);
    }

    update(cellX, cellY) {
        let indexX = cellX / gridSize;
        let indexY = cellY / gridSize;
        console.log(indexX, indexY, this.grid, this.grid[indexY][indexX]);
        this.grid[indexY][indexX].isTaken = true;
        console.log(this.grid);
    }

    show() {
        this.grid.map((row, rowIndex) => {
            row.map((singleCell, colIndex) => {
                singleCell.isTaken ? fill(255) : noFill();
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
