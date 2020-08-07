describe("Bishop Class", () => {
  it('can determine where it can move to from C1', () => {
    const colour = "white";
    const startingPosition = "C1";
    const piece = new Bishop(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["A3","B2","D2","E3","F4","G5","H6"].sort());
  });
  it('can determine where it can move to from E4', () => {
    const colour = "white";
    const startingPosition = "E4";
    const piece = new Bishop(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["B1","C2","D3","F5","G6","H7","H1","G2","F3","D5","C6","B7","A8"].sort());
  });
})