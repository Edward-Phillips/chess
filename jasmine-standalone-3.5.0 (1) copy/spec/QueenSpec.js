describe('Queen Class', () => {
  it('can determine where it can move to from E4', () => {
    const colour = "white";
    const startingPosition = "E4";
    const piece = new Queen(colour, startingPosition);
    expect(piece.moves().sort()).toEqual(["B1","C2","D3","F5","G6","H7","H1","G2","F3","D5","C6","B7","A8","A4","B4","C4","D4","F4","G4","H4","E8","E7","E6","E5","E3","E2","E1"].sort())
  })
})