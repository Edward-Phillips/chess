class Rook extends Piece {
  constructor (colour, piece) {
    super(colour, piece);
  }
  moves() {
    const numberPosition = parseInt(this.position[1]);
    const charValue = this.position[0].charCodeAt(0);
    const results = [];
    for (let index = this.charCodeMin; index <= this.charCodeMax; index++) {
      const character = String.fromCharCode(index);
      const number = numberPosition;
      results.push(character + number);
    }
    for (let index = 1; index < 9; index++) {
      const character = this.position[0];
      const number = index;
      results.push(character + number);
    }
    return results.filter(x=> x !==this.position);
  }
}