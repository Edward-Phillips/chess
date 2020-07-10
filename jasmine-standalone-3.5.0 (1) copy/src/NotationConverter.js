function notationConverter(string) {
    const rowPosition = 25 - (90-string.charCodeAt(0));
    const colPosition = parseInt(string[1]) - 1;
    const result = rowPosition * 8 + colPosition;
    return result;
}