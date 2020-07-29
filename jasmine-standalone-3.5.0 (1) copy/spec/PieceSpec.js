describe('Piece class', () => {
  it('has a colour', () => {
    const colour = "black";
    const startPoint = "nil"
    const pawn = new Piece(colour, startPoint);
    expect(pawn.colour).toEqual(colour);
  });
  it('stores the current position on the board', () => {
    const colour = "black";
    const position = "A1"
    const pawn = new Piece(colour, position)
    expect(pawn.position).toEqual(position);
  })
})