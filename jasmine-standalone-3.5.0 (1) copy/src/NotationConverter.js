function notationConverter(string) {
    const rowPosition = 25 - (90-string.charCodeAt(0));
    if (rowPosition > 7) {
      throw new Error("invalid input")
    }
    const colPosition = parseInt(string[1]) - 1;
    if (colPosition > 7) {
      throw new Error("invalid input")
    }
    const result = rowPosition * 8 + colPosition;
    return result;
}