class Pawn extends Piece {
  constructor(colour, place) {
    super(colour, place);
  };

  moves () {
    const numberPosition = parseInt(this.position[1]);
    if (numberPosition == 2) {
      const options = [numberPosition + 1, numberPosition + 2]
      return [this.position[0]+options[0], this.position[0] + options[1]]
    } else if (numberPosition >= 8) {
      return []
    } else {
      const options = numberPosition + 1;
      return [this.position[0] + options ]
    }
  }
}