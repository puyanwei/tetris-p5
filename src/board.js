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
        console.log(this.grid, indexX - 2, indexY - 1);
        this.grid[indexX - 1][indexY - 1].isTaken = true;
        console.log(this.grid);
    }

    show() {
        this.grid.map((row, rowIndex) => {
            row.map((singleCell, colIndex) => {
                noFill();
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
