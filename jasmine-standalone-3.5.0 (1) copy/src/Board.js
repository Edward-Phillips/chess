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
    this.setPawnsByColour("black");
    this.setPawnsByColour("white");
  };

  setPawnsByColour(colour) {
    let rowNumber = 2;
    if (colour == "black") {
      rowNumber = 7;
    }
    for (let index = 0; index <= 7; index++) {
      const character = this.charCodeMin + index
      const cellAddress = String.fromCharCode(character) + rowNumber
      this.cells[cellAddress].insertPiece(new Pawn(colour, cellAddress))
    }
  };

  setRooks() {
    this.setRooksByColour("black");
    this.setRooksByColour("white");
  };

  setRooksByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8;
    }
    const rookLocationOne = "A" + rowNumber;
    const rookLocationTwo = "H" + rowNumber;
    this.cells[rookLocationOne].insertPiece(new Rook(colour, rookLocationOne))
    this.cells[rookLocationTwo].insertPiece(new Rook(colour, rookLocationTwo))
  };

  setKnights() {
    this.setKnightsByColour("black")
    this.setKnightsByColour("white")
  };

  setKnightsByColour(colour) {
    let rowNumber = 1;
    if(colour == "black") {
      rowNumber = 8
    }
    const knightLocationOne = "B" + rowNumber;
    const knightLocationTwo = "G" + rowNumber;
    this.cells[knightLocationOne].insertPiece(new Knight(colour, knightLocationOne));
    this.cells[knightLocationTwo].insertPiece(new Knight(colour, knightLocationTwo));
  };

  setKings() {
    this.setKingsByColour("black");
    this.setKingsByColour("white");
  };

  setKingsByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8
    }
    const kingLocation = "E" + rowNumber
    this.cells[kingLocation].insertPiece(new King(colour, kingLocation));
  };

  setQueens() {
    this.setQueensByColour("white");
    this.setQueensByColour("black");
  };

  setQueensByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8
    }
    const queenLocation = "D" + rowNumber;
    this.cells[queenLocation].insertPiece(new Queen(colour, queenLocation));
  };
};