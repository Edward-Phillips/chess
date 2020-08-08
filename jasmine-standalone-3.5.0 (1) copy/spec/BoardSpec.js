describe('Board class', () => {
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
  it(" setting the pawns on the board puts a white pawn in A2 part 1", () => {
    const chessboard = new Board;
    const colour = "white"
    chessboard.generateCells();
    chessboard.setPawns();
    expect(chessboard.cells["A2"].extractPiece().colour).toEqual(colour)
  });
  it(" setting the pawns on the board puts a white pawn in A2 part 2", () => {
    const chessboard = new Board;
    chessboard.generateCells();
    chessboard.setPawns();
    expect(chessboard.cells["A2"].extractPiece()).toBeInstanceOf(Pawn);
  });
  it("setting the rooks on the board puts a black rook in A8 part 1", () => {
    const chessboard = new Board;
    const colour = "black";
    const cellAddress = "A8"
    chessboard.generateCells();
    chessboard.setRooks();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it("setting the rooks on the board puts a black rook in A8 part 2", () => {
    const chessboard = new Board;
    const cellAddress = "A8"
    chessboard.generateCells();
    chessboard.setRooks();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Rook);
  });
  it("setting the rooks on the board puts a white rook in A1 part 1", () => {
    const chessboard = new Board;
    const colour = "white";
    const cellAddress = "A1"
    chessboard.generateCells();
    chessboard.setRooks();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it("setting the rooks on the board puts a black rook in A1 part 2", () => {
    const chessboard = new Board;
    const cellAddress = "A1"
    chessboard.generateCells();
    chessboard.setRooks();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Rook);
  });
  it("setting the knights on the board puts a black knight in B8 part 1", () => {
    const chessboard = new Board;
    const colour = "black";
    const cellAddress = "B8"
    chessboard.generateCells();
    chessboard.setKnights();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it("setting the knights on the board puts a black knight in B8 part 2", () => {
    const chessboard = new Board;
    const cellAddress = "B8"
    chessboard.generateCells();
    chessboard.setKnights();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Knight);
  });
  it("setting the knights on the board puts a white knight in B1 part 1", () => {
    const chessboard = new Board;
    const colour = "white";
    const cellAddress = "B1"
    chessboard.generateCells();
    chessboard.setKnights();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it("setting the knights on the board puts a white knight in B1 part 2", () => {
    const chessboard = new Board;
    const cellAddress = "B1"
    chessboard.generateCells();
    chessboard.setKnights();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Knight);
  });
  it('setting the kings on the board puts a white king in E1 part 1', () => {
    const chessboard = new Board;
    const cellAddress = "E1"
    const colour = "white";
    chessboard.generateCells();
    chessboard.setKings();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it('setting the kings on the board puts a white king in E1 part 2', () => {
    const chessboard = new Board;
    const cellAddress = "E1"
    chessboard.generateCells();
    chessboard.setKings();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(King);
  });
  it('setting the kings on the board puts a black king in E8 part 1', () => {
    const chessboard = new Board;
    const cellAddress = "E8"
    const colour = "black";
    chessboard.generateCells();
    chessboard.setKings();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it('setting the kings on the board puts a white king in D1 part 2', () => {
    const chessboard = new Board;
    const cellAddress = "E1"
    chessboard.generateCells();
    chessboard.setKings();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(King);
  });
  it('setting the queens on the board puts a white queen in D1 part 1', () => {
    const chessboard = new Board;
    const cellAddress = "D1"
    const colour = "white";
    chessboard.generateCells();
    chessboard.setQueens();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it('setting the queens on the board puts a white queen in D1 part 2', () => {
    const chessboard = new Board;
    const cellAddress = "D1"
    chessboard.generateCells();
    chessboard.setQueens();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Queen);
  });
  it('setting the queens on the board puts a black queen in D8 part 1', () => {
    const chessboard = new Board;
    const cellAddress = "D8"
    const colour = "black";
    chessboard.generateCells();
    chessboard.setQueens();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it('setting the queens on the board puts a black queen in D8 part 2', () => {
    const chessboard = new Board;
    const cellAddress = "D8"
    chessboard.generateCells();
    chessboard.setQueens();
    expect(chessboard.cells[cellAddress].extractPiece()).toBeInstanceOf(Queen);
  });
  it('setting the bishops on the board puts a black bishop in C8', () => {
    const chessboard = new Board;
    const cellAddress = "C8";
    const colour = "black";
    chessboard.generateCells();
    chessboard.setBishops();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
  it('setting the bishops on the board puts a white bishop in C1', () => {
    const chessboard = new Board;
    const cellAddress = "C1";
    const colour = "white";
    chessboard.generateCells();
    chessboard.setBishops();
    expect(chessboard.cells[cellAddress].extractPiece().colour).toEqual(colour);
  });
})