class Rook extends Piece {
  constructor (colour, piece) {
    super(colour, piece);
  }
  moves() {
    return ["A1","B1","C1","D1","E1","F1","G1","H2","H3","H4","H5","H6","H7","H8"]
  }
}