// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertNumberToString("42")); // 42
console.log(convertNumberToString("97")); // 97
console.log(convertNumberToString("11")); // 11

function convertNumberToString(number) {
  return number.toString();
}

function convertStringToNumber(string) {
  return string.parseInt();
}
