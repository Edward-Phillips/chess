describe('board class', () => {
  it('can generate a new board', () => {
    const chessboard = new Board;
    expect(chessboard).toBeInstanceOf(Board);
  });
  it(' can store the cells of the board', () => {
    const chessboard = new Board;
    expect(typeof(chessboard.cells)).toEqual(typeof([]));
  });
  it(' can populate the board with 64 cells', () => {
    const chessboard = new Board;
    chessboard.generateCells();
    expect(Object.keys(chessboard.cells).length).toEqual(64);
  });
  it(' can return the cell given the A1 input', () => {
    const chessboard = new Board();
    chessboard.generateCells();
    expect(chessboard.cells["A1"]).toBeInstanceOf(Cell);
  })
  it(" can determine who's turn it is pt1", ()=> {
    const chessboard = new Board;
    chessboard.generateCells();
    expect(chessboard.turn()).toEqual('White')
  });
  it(" can determine who's turn it is pt2", ()=> {
    const chessboard = new Board;
    chessboard.generateCells();
    chessboard.incTurn();
    expect(chessboard.turn()).toEqual('Black')
  });
  it(" setting the pawns on the board puts a black pawn in A7 part 1", () => {
    const chessboard = new Board;
    const colour = "black"
    chessboard.generateCells();
    chessboard.setPawns();
    expect(chessboard.cells["A7"].extractPiece().colour).toEqual("black")
  });
  it(" setting the pawns on the board puts a black pawn in A7 part 2", () => {
    const chessboard = new Board;
    const colour = "black"
    chessboard.generateCells();
    chessboard.setPawns();
    expect(chessboard.cells["A7"].extractPiece()).toBeInstanceOf(Pawn);
  });
})