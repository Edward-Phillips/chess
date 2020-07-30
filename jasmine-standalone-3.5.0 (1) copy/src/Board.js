class Board {

  constructor() {
    this.cells = {}
    this.currentTurn = 0
  };

  generateCells() {
    let colour = false;
    const charCode = "A".charCodeAt(0);
    for (let index = 0; index < 64; index++) {
      if (index % 2 == 0) {
        colour = true;
      }
      const element = new Cell(colour);
      const currentLetter = String.fromCharCode(charCode + index % 8)
      const currentNumber = parseInt(9 - (index + 1) / 8);
      const cellAddress = currentLetter + currentNumber;
      this.cells[cellAddress] = index;
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