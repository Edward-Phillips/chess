describe("King Class", () => {
  it("can determine where it can move to from E4", () => {
    const colour = "white";
    const startingPosition = "E4";
    const piece = new King(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["D3","E3","F3","F4","F5","E5","D5","D4"].sort())
  })
})