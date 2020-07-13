class Board {

  constructor() {
    this.cells = []
    this.currentTurn = 0
  };

  generateCells() {
    let colour = false;
    for (let index = 0; index < 64; index++) {
      if (index % 2 == 0) {
        colour = true;
      }
      const element = new Cell(colour);
      this.cells.push(element);
    }
  };

  turn() {
    if (this.currentTurn % 2 == 0) {
      return "White"
    }
    return "Black"
  };

  incTurn() {
    this.currentTurn += 1;
  };
};