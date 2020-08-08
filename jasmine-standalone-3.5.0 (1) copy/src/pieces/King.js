class King extends Piece {
  constructor(colour, position) {
    super(colour, position);
  }
  moves() {
    const charValue = this.position[0].charCodeAt(0);
    const numberPosition = parseInt(this.position[1]);
    const startingPosition = numberPosition - 1
    const results = [];
    for (let index = charValue - 1; index <= charValue + 1; index++) {
      if (index >= this.charCodeMin && index <= this.charCodeMax) {
        const character = String.fromCharCode(index);
        if (startingPosition >= 1) {
          results.push(character + startingPosition);
        }
        results.push(character + (startingPosition + 1))
        if ( startingPosition + 2 <= 8) {
          results.push(character + (startingPosition + 2));
        }
      }
    
    }
    return results.filter(x=> x !==this.position);
  }
}