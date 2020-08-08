class Queen extends Piece {
  constructor (colour, piece) {
    super(colour, piece);
  }
  moves() {
    const numberPosition = parseInt(this.position[1]);
    const charValue = this.position[0].charCodeAt(0);
    let increment = 0;
    const results = [];
    for (let index = charValue + 1; index <= this.charCodeMax; index++) {
      increment += 1;
      const character = String.fromCharCode(index);
      const numberPositive = numberPosition + increment;
      const numberNegative = numberPosition - increment;
      if (numberPositive <= 8) {
        results.push(character + numberPositive);
      }
      if (numberNegative >= 1) {
        results.push(character + numberNegative);
      }
    }
    increment = 0;
    for (let index = charValue -1; index >= this.charCodeMin; index--) {
      increment += 1;
      const character = String.fromCharCode(index)
      const numberPositive = numberPosition + increment;
      const numberNegative = numberPosition - increment;
      if (numberPositive <= 8) {
        results.push(character + numberPositive);
      }
      if (numberNegative >= 1) {
        results.push(character + numberNegative);
      }
    }
    increment = 1;
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
    console.log(results.filter(x=> x !==this.position))
    return results.filter(x=> x !==this.position);
  }
}