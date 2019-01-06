class Board {
	constructor(columns, rows) {
		this.columns = columns;
		this.rows = rows;
		this.grid;
	}

	initialize() {
		let cell = new Cell();

		let array = [];
		let cols = [];

		for (let i = 0; i < this.columns; i++) {
			cols = this.immutablePush(cols, cell);
		}

		for (let i = 0; i < this.rows; i++) {
			array = this.immutablePush(array, cols);
		}

		this.grid = array;
		console.log(array, cols);

		// let columnArray = Array.from({ length: this.columns }, (element) => ...cell);
		// this.grid = Array.from({ length: this.rows }, (element) => ...columnArray);
	}

	immutablePush(array, element) {
		return [ ...array, element ];
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
				rect(colIndex * gridSize, rowIndex * gridSize, gridSize, gridSize);
			});
		});
	}
}
