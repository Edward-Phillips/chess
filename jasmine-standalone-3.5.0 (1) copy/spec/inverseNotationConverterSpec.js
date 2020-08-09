describe('inverse notation converter function', () => {
  it('can take an input [0,0] and return A1', () => {
    expect(inverseNotationConverter([0,0])).toEqual("A1");
  })
  it('can take an input [0,1] and return A2', () => {
    expect(inverseNotationConverter([0,1])).toEqual("A2");
  })
})