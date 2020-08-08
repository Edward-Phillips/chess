class Knight extends Piece {
  constructor (colour, position) {
    super (colour, position);
  };
  moves () {
    const charValue = this.position.charCodeAt(0);
    const numberPosition = parseInt(this.position[1])
    const results = [];
    for (let index = 1; index <= 2; index++) {
      const offset = 3 - index;
      const offsetNumberUp = numberPosition + offset;
      const offsetNumberDown = numberPosition - offset;
      const characterToTheRight = String.fromCharCode(charValue + index);
      const characterToTheLeft = String.fromCharCode(charValue - index);
      if (offsetNumberDown >= 1) {
        if(charValue - index >= this.charCodeMin) {
          results.push(characterToTheLeft + offsetNumberDown)
        }
        if(charValue + index <= this.charCodeMax) {
          results.push(characterToTheRight + offsetNumberDown)
        }
      }
      if (offsetNumberUp <= 8) {
        if(characterToTheLeft.charCodeAt(0) >= this.charCodeMin) {
          results.push(characterToTheLeft + offsetNumberUp)
        }
        if(charValue + index <= this.charCodeMax) {
          results.push(characterToTheRight + offsetNumberUp)
        }
      }
    }
    return results
  }
}