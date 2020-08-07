class Bishop extends Piece {
  constructor (colour, piece) {
    super (colour, piece);
    this.charCodeMin = 65;
    this.charCodeMax = 72;
  };
  moves () {
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
        console.log(character + numberPositive);
      }
      if (numberNegative >= 1) {
        results.push(character + numberNegative);
      }
    }
    return results
  }
}