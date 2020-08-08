class King extends Piece {
  constructor(colour, position) {
    super(colour, position);
  }
  moves() {
    return ["D3","E2","F3","F4","F5","E5","D5","D4"]
  }
}