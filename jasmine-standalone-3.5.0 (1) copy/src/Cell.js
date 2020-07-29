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
        if(this.contents[0].colour != piece.colour) {
          this.contents.length = 0;
        } else {
          throw new Error('These pieces are on the same side!');
        }
      }
      this.contents.push(piece)
    }
  };
}