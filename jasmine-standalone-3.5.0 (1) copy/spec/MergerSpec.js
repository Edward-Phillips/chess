describe('Merger', () => {
  it('can merge 2 arrays of length 1 pt1', () => {
    const a = [1],
    b = [2],
    c = [1,2];
    expect(Merger(a,b)).toEqual(c)
  });
  it('can merge 2 arrays of length 1 pt2', () => {
    const a = [2],
    b = [3],
    c = [2,3];
    expect(Merger(a,b)).toEqual(c)
  });
  it('can merge 2 arrays of length 2 pt1', () => {
    const a = [1,2],
    b = [3,4],
    c = [1,3,2,4];
    expect(Merger(a,b)).toEqual(c)
  });
  it('can merge 2 arrays of length 2 pt2', () => {
    const b = [1,2],
    a = [3,4],
    c = [3,1,4,2];
    expect(Merger(a,b)).toEqual(c)
  });
  it('can merge 2 arrays of unequal length', () => {
    const a = ['a','b'],
    b = [1,2,3],
    c =['a',1,'b',2,3];
    expect(Merger(a,b)).toEqual(c)
  })
})