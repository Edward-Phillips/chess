describe('cell class', () => {
  it('can tell me if it is white or black pt1', () => {
    colour = true;
    square = new Cell(colour);
    expect(square.colour).toEqual(true);
  });
  it('can tell me i;f it is white or black pt2', () => {
    colour = false;
    square = new Cell(colour);
    expect(square.colour).toEqual(false);
  });
  it('can store a piece in the cell', () => {
    const colour = false,
    piece = "pawn",
    square = new Cell(colour, piece);
    expect(square.contents).toEqual("pawn");
  });
})