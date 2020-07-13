class Cell {
  constructor(colour, startingPiece) {
    this.colour = colour;
    this.occupied = false;
    this.contents = []
    this.insertPiece(startingPiece);
  }

  extractPiece () {
    return this.contents.pop();
  };

  insertPiece (piece) {
    if(piece) {
      this.contents.push(piece)
    }
  }
}