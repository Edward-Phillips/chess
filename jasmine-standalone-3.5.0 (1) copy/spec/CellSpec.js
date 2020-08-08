describe('cell class', () => {
  it('can store a piece in the cell', () => {
    piece = {colour: "black"},
    square = new Cell(piece);
    expect(square.contents[0]).toEqual(piece);
  });
  it('can return the piece stored in the cell', () => {
    piece = {colour: "black"},
    square = new Cell(piece);
    expect(square.extractPiece()).toEqual(piece);
  });
  it('returning the piece removes the piece from the cell', () => {
    piece = { colour: "black" },
    square = new Cell(piece);
    square.extractPiece();
    expect(square.contents.length).toEqual(0);
  });
  it('can add a piece to the cell', () => {
    piece = {colour: "black"},
    square = new Cell();
    square.insertPiece(piece);
    expect(square.extractPiece()).toEqual(piece);
  });
  it('has no contents when a piece is not given at cell creation', () => {
    square = new Cell();
    expect(square.contents.length).toEqual(0);
  });
  it('adding a piece to a cell removes the original piece', () => {
    piece = {colour: "black"},
    secondPiece = {colour: "white"},
    square = new Cell(piece);
    square.insertPiece(secondPiece);
    expect(square.contents.length).toEqual(1);
    expect(square.extractPiece()).toEqual(secondPiece);
  });
  it('adding a piece of the same colour to a cell raises an error', () => {
    piece = {colour: "black"},
    secondPiece = {colour: "black"},
    square = new Cell(piece);
    expect(() => { square.insertPiece(secondPiece) }).toThrow(new Error('These pieces are on the same side!'));
  });
  
})