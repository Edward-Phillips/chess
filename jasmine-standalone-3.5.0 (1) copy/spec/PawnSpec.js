describe('Pawn Class', () => {
  it('can determine the positions it can move to', () => {
    const colour = "white";
    const startingPosition = "A2";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A3", "A4"])
  })
  it('can determine the positions it can move to pt 2', () => {
    const colour = "white";
    const startingPosition = "A3";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A4"])
  })
})