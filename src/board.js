class Board {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.grid;
    }

    initialize() {
        let colsArray = new Array(this.columns).fill(new Cell(false));
        this.grid = new Array(this.rows).fill(colsArray);
    }

    update(cellX, cellY) {
        console.log(cellX, cellY);
        noLoop();
    }

    show() {
        console.log(this.grid);
        this.grid.map((row, rowIndex) => {
            row.map((cell, colIndex) => {
                console.log(cell, rowIndex * gridSize, colIndex * gridSize);
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
