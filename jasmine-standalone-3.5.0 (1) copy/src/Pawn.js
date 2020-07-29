class Pawn extends Piece {
  constructor(colour, place) {
    super(colour, place);
  };

  moves () {
    return ['A3', "A4"]
  }
}