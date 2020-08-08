function notationConverter(string) {
  const colLocation = string.charCodeAt(0) - 65
  const rowLocation = parseInt(string[1]) - 1
  const rowPosition = 25 - (90-string.charCodeAt(0));
  const colPosition = parseInt(string[1]) - 1;
  const overTheBoard = rowPosition > 7 || colPosition > 7;
  const underTheBoard = rowPosition < 0 || colPosition < 0;
  const offTheBoard = overTheBoard || underTheBoard;
  const tooLong = string.length > 2;
  const errorCriteria = tooLong || offTheBoard
  if (errorCriteria) {
    throw new Error('invalid input')
  }
  const result = [colLocation,rowLocation]
    return result;
}