class Board {

  constructor() {
    this.cells = {}
    this.currentTurn = 0
    this.charCodeMin = 65;
    this.charCodeMax = 72;
  };

  generateCells () {
    const charCode = "A".charCodeAt(0);
    for (let index = 0; index < 64; index ++) {
      const element = new Cell();
      const currentLetter = String.fromCharCode(charCode + index % 8)
      const currentNumber = parseInt(9 - (index + 1) / 8);
      const cellAddress = currentLetter + currentNumber;
      this.cells[cellAddress] = element;
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

  setPawns() {
    this.setPawnsByColour("black")
    this.setPawnsByColour("white")
  }

  setPawnsByColour(colour) {
    let rowNumber = 2
    if (colour == "black") {
      rowNumber = 7
    }
    for (let index = 0; index <= 7; index++) {
      const character = this.charCodeMin + index
      const cellAddress = String.fromCharCode(character) + rowNumber
      console.log(cellAddress)
      this.cells[cellAddress].insertPiece(new Pawn(colour, cellAddress))
    }
  }
};