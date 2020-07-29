describe('Pawn Class', () => {
  it('can determine the positions it can move to', () => {
    const colour = "white";
    const startingPosition = "A2";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A3", "A4"])
  })
})