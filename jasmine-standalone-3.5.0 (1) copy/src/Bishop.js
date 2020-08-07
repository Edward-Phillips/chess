class Bishop extends Piece {
  constructor(colour, piece) {
    super(colour, piece);
  };
  moves () {
    return ["A3","B2","D2","E3","F4","G5","H6"]
  }
}