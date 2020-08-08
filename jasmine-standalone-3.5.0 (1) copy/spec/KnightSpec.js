describe("Knight Class", () => {
  it("Can determine where it can move to from E4", () => {
    const colour = "white";
    const startingPosition = "E4";
    const piece = new Knight(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["F2","G3","G5","F6","D6","C5","C3","D2"].sort())
  });
  it("doesn't allow moves beyond the 8th row", () => {
    const colour = "white";
    const startingPosition = "C8";
    const piece = new Knight(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["A7","B6","D6","E7"].sort())
  });
  it("doesn't allow moves below the 1st row", () => {
    const colour = "white";
    const startingPosition = "C1";
    const piece = new Knight(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["A2","B3","D3","E2"].sort())
  })
  it("doesn't allow moves to the left of column A", () => {
    const colour = "white";
    const startingPosition = "A4";
    const piece = new Knight(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["B2","C3","C5","B6"].sort())
  })
})