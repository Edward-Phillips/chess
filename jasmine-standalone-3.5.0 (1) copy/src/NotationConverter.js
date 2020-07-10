function notationConverter(string) {
  if (string[0] == "A") {
    return parseInt(string[1]) - 1;
  } else if (string[0] == "B") {
    return 8 + parseInt(string[1]) - 1;
  } else {
    const rowPosition = 25 - (90-string.charCodeAt(0));
    console.log("AZ".charCodeAt(0))
    console.log(string.charCodeAt(0));
    console.log(rowPosition);
    const colPosition = parseInt(string[1]) - 1;
    const result = rowPosition * 8 + colPosition;
    return result;
  };
}