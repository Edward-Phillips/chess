describe('notation Converter', () => {
  it('should be able to convert a string "A1" to 0', () => {
    expect(notationConverter("A1")).toEqual(0);
  });
  it('should be able to convert a string "A2" to 1', () => {
    expect(notationConverter("A2")).toEqual(1);
  });
  it('should be able to convert a string "A5" to 4', () => {
    expect(notationConverter("A5")).toEqual(4);
  });
  it('should be able to convert a string "B1" to 8', () => {
    expect(notationConverter("B1")).toEqual(8);
  });
  it('should be able to convert a string "B2" to 9', () => {
    expect(notationConverter("B2")).toEqual(9);
  });
  it('should be able to convert as string "C1" to 16', () => {
    expect(notationConverter("C1")).toEqual(16);
  });
  it('should not accept A1-style inputs beyond H', () => {
    expect(function () { notationConverter("K6") }).toThrow(new Error("invalid input"));
  });
  it('should not accept A1-style inputs beyond 8', () => {
    expect(function () { notationConverter("F9") }).toThrow(new Error("invalid input"));
  });
  it('should not accept inputs with a length greater than 2', () => {
    expect(function () { notationConverter("A11") }).toThrow(new Error("invalid input"));
  });
  it('should not accept A0 as an input', () => {
    expect(function() { notationConverter("A0") }).toThrow(new Error("invalid input"));
  });
})