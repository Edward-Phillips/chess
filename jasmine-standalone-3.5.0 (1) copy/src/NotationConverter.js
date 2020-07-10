function notationConverter(string) {
  if (string[0] == "A") {
    return parseInt(string[1]) - 1;
  } else {
    return 8 + parseInt(string[1]) - 1;
  }
}