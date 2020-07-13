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
      if(this.contents.length > 0) {
        this.contents.length = 0;
      }
      this.contents.push(piece)
    }
  };
}