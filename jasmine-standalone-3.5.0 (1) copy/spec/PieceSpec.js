describe('Piece class', () => {
  it('has a colour', () => {
    const colour = "black";
    const pawn = new Piece(colour);
    expect(pawn.colour).toEqual(colour);
  });
})