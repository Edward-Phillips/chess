function inverseNotationConverter (inputArray) {
  const character = String.fromCharCode(65 + inputArray[0])
  const number = inputArray[1] + 1
  return character + number
}