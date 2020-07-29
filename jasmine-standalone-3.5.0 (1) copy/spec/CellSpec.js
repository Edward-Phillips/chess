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
    piece = {colour: "black"},
    square = new Cell(colour, piece);
    expect(square.contents[0]).toEqual(piece);
  });
  it('can return the piece stored in the cell', () => {
    const colour = false,
    piece = {colour: "black"},
    square = new Cell(colour, piece);
    expect(square.extractPiece()).toEqual(piece);
  });
  it('returning the piece removes the piece from the cell', () => {
    const colour = false,
    piece = { colour: "black" },
    square = new Cell(colour, piece);
    square.extractPiece();
    expect(square.contents.length).toEqual(0);
  });
  it('can add a piece to the cell', () => {
    const colour = false,
    piece = {colour: "black"},
    square = new Cell(colour);
    square.insertPiece(piece);
    expect(square.extractPiece()).toEqual(piece);
  });
  it('has no contents when a piece is not given at cell creation', () => {
    const colour = false,
    square = new Cell(colour);
    expect(square.contents.length).toEqual(0);
  });
  it('adding a piece to a cell removes the original piece', () => {
    const colour = false,
    piece = {colour: "black"},
    secondPiece = {colour: "white"},
    square = new Cell(colour, piece);
    square.insertPiece(secondPiece);
    expect(square.contents.length).toEqual(1);
    expect(square.extractPiece()).toEqual(secondPiece);
  });
  it('adding a piece of the same colour to a cell raises an error', () => {
    const colour = false,
    piece = {colour: "black"},
    secondPiece = {colour: "black"},
    square = new Cell(colour, piece);
    expect(() => { square.insertPiece(secondPiece) }).toThrow(new Error('These pieces are on the same side!'));
  });
  
})