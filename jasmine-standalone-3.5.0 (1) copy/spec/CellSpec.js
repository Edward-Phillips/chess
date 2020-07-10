describe('cell class', () => {
  it('can tell me if it is white or black pt1',() => {
    colour = true
    square = new Cell(colour);
    expect(square.colour).toEqual(true);
  });
  it('can tell me if it is white or black pt2',() => {
    colour = false
    square = new Cell(colour);
    expect(square.colour).toEqual(false);
  });
})