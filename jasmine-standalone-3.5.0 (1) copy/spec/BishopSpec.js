describe("Bishop Class", () => {
  it('can determine where it can move to from C1', () => {
    const colour = "white";
    const startingPosition = "C1";
    const piece = new Bishop(colour, startingPosition);
    expect(piece.moves()).toEqual(["A3","B2","D2","E3","F4","G5","H6"]);
  });
})