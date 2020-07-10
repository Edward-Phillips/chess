describe('board class', () => {
  it('can generate a new board', () => {
    const chessboard = new Board;
    expect(chessboard).toBeInstanceOf(Board);
  });
  it(' can store the cells of the board', () => {
    const chessboard = new Board;
    expect(chessboard.cells.length).toEqual(0);
  });
  it(' can populate the board with 64 cells', () => {
    const chessboard = new Board;
    chessboard.generateCells();
    expect(chessboard.cells.length).toEqual(64);
  });
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
})