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
}
