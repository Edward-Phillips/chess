class Cell {
  constructor(colour, startingPiece) {
    this.colour = colour;
    this.occupied = false;
    this.contents = [startingPiece];
  }

  extractPiece () {
    return this.contents[0]
  }
}