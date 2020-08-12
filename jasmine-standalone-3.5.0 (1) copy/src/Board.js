class Board {

  constructor(converter = notationConverter, inverter = inverseNotationConverter) {
    this.cells = {}
    this.currentTurn = 0
    this.charCodeMin = 65;
    this.charCodeMax = 72;
    this.converter = converter;
    this.inverter = inverter;
  };

  generateCells () {
    const charCode = "A".charCodeAt(0);
    for (let index = 0; index < 64; index ++) {
      const element = new Cell();
      const currentLetter = String.fromCharCode(charCode + index % 8)
      const currentNumber = parseInt(9 - (index + 1) / 8);
      const cellAddress = currentLetter + currentNumber;
      this.cells[cellAddress] = element;
    }
  };

  turn() {
    if (this.currentTurn % 2 == 0) {
      return "White"
    }
    return "Black"
  };

  incTurn() {
    this.currentTurn += 1;
  };

  setPieces() {
    this.setPawns();
    this.setRooks();
    this.setKnights();
    this.setBishops();
    this.setQueens();
    this.setKings();
  };

  setPawns() {
    this.setPawnsByColour("black");
    this.setPawnsByColour("white");
  };

  setPawnsByColour(colour) {
    let rowNumber = 2;
    if (colour == "black") {
      rowNumber = 7;
    }
    for (let index = 0; index <= 7; index++) {
      const character = this.charCodeMin + index
      const cellAddress = String.fromCharCode(character) + rowNumber
      this.cells[cellAddress].insertPiece(new Pawn(colour, cellAddress))
    }
  };

  setRooks() {
    this.setRooksByColour("black");
    this.setRooksByColour("white");
  };

  setRooksByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8;
    }
    const rookLocationOne = "A" + rowNumber;
    const rookLocationTwo = "H" + rowNumber;
    this.cells[rookLocationOne].insertPiece(new Rook(colour, rookLocationOne))
    this.cells[rookLocationTwo].insertPiece(new Rook(colour, rookLocationTwo))
  };

  setKnights() {
    this.setKnightsByColour("black")
    this.setKnightsByColour("white")
  };

  setKnightsByColour(colour) {
    let rowNumber = 1;
    if(colour == "black") {
      rowNumber = 8
    }
    const knightLocationOne = "B" + rowNumber;
    const knightLocationTwo = "G" + rowNumber;
    this.cells[knightLocationOne].insertPiece(new Knight(colour, knightLocationOne));
    this.cells[knightLocationTwo].insertPiece(new Knight(colour, knightLocationTwo));
  };

  setKings() {
    this.setKingsByColour("black");
    this.setKingsByColour("white");
  };

  setKingsByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8
    }
    const kingLocation = "E" + rowNumber
    this.cells[kingLocation].insertPiece(new King(colour, kingLocation));
  };

  setQueens() {
    this.setQueensByColour("white");
    this.setQueensByColour("black");
  };

  setQueensByColour(colour) {
    let rowNumber = 1;
    if (colour == "black") {
      rowNumber = 8
    }
    const queenLocation = "D" + rowNumber;
    this.cells[queenLocation].insertPiece(new Queen(colour, queenLocation));
  };

  setBishops() {
    this.setBishopsByColour("black");
    this.setBishopsByColour("white");
  };

  setBishopsByColour(colour) {
    let rowNumber = 8;
    if (colour == "white") {
      rowNumber = 1;
    }
    const bishopLocationOne = "C" + rowNumber;
    const bishopLocationTwo = "F" + rowNumber;
    this.cells[bishopLocationOne].insertPiece(new Bishop(colour, bishopLocationOne));
    this.cells[bishopLocationTwo].insertPiece(new Bishop(colour, bishopLocationTwo));
  };

  move(here,there) {
    if (Object.keys(this.cells).includes(here) && Object.keys(this.cells).includes(there)) {
      const movingPiece = this.cells[here].extractPiece()
      if (movingPiece.moves().includes(there)) {
        // if(emptyCells(cellsBetween(here,there)))
        this.cells[there].insertPiece(movingPiece);
      }
    }
  }

  cellsBetween(here, there) {
    const hereCoords = this.converter(here);
    const thereCoords = this.converter(there);
    const xArray = [hereCoords[0],thereCoords[0]];
    const yArray = [hereCoords[1],thereCoords[1]];
    const xDiff = xArray[0] - xArray[1];
    const yDiff = yArray[0] - yArray[1];
    const yMin = Math.min(...yArray);
    const xMin = Math.min(...xArray);
    const yMax = Math.max(...yArray);
    const xMax = Math.max(...xArray);
    const results = []
    if (xDiff != 0) {
      if(yDiff != 0) {
        if(yDiff > 0) {
          for (let index = 1; index < yMax - yMin; index++) {
            const xCoord = xMax - index;
            const yCoord = yMin + index;
            const formattedCoord = this.inverter([xCoord,yCoord]);
            results.push(formattedCoord)
          }
          return results;
        } else {
          if(xDiff > 0) {
            for (let index = 1; index < yMax - yMin; index++) {
              const xCoord = xMax - index;
              const yCoord = yMin + index;
              const formattedCoord = this.inverter([xCoord,yCoord]);
              results.push(formattedCoord)
            }
            return results;
          } else {
            for (let index = 1; index < yMax - yMin; index++) {
              const xCoord = xMin + index;
              const yCoord = yMin + index;
              const formattedCoord = this.inverter([xCoord,yCoord]);
              results.push(formattedCoord)
            }
            return results;
          }
        }
      } else {
        for (let index = 1; index < xMax - xMin; index++) {
          const xCoord = xMin + index;
          const yCoord = yMin
          const formattedCoord = this.inverter([xCoord,yCoord]);
          results.push(formattedCoord)
        }
        return results;
      }
    } else {
      if(yDiff != 0) {
          for (let index = 1; index < yMax - yMin; index++) {
            const yCoord = yMin + index;
            const xCoord = xMin;
            const formattedCoord = this.inverter([xCoord,yCoord]);
            results.push(formattedCoord)
          }
          return results;
      }
    }
  }
};