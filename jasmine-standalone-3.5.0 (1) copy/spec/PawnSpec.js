describe('Pawn class', () => {
  it('can determine the positions it can move to', () => {
    const colour = "white";
    const startingPosition = "A2";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A3", "A4"])
  });
  it('can determine the positions it can move to when not in starting position', () => {
    const colour = "white";
    const startingPosition = "A3";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A4"])
  });
  it('Does not allow moves beyond the 8th row', () => {
    const colour = "white";
    const startingPosition = "A8";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual([]);
  });
  it('can determine the positions it can move to when the piece is black', () => {
    const colour = "black";
    const startingPosition = "A7";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A6", "A5"])
  });
  it('can determine the positions it can move to when not in starting position', () => {
    const colour = "black";
    const startingPosition = "A3";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual(["A2"])
  });
  it('Does not allow moves beyond the 8th row', () => {
    const colour = "black";
    const startingPosition = "A1";
    const piece = new Pawn(colour, startingPosition);
    expect(piece.moves()).toEqual([]);
  });
})