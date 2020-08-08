describe("Rook class", () => {
  it('can determine where it can move to from H1', () => {
    const colour = "white";
    const startingPosition = "H1";
    const piece = new Rook(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["A1","B1","C1","D1","E1","F1","G1","H2","H3","H4","H5","H6","H7","H8"].sort())
  })
})