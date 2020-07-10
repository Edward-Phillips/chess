function notationConverter(string) {
  const rowPosition = 25 - (90-string.charCodeAt(0));
  const colPosition = parseInt(string[1]) - 1;
  const offTheBoard = rowPosition > 7 || colPosition > 7;
  const tooLong = string.length > 2;
  if (tooLong || offTheBoard) {
    throw new Error('invalid input')
  }
  const result = rowPosition * 8 + colPosition;
  return result;
}