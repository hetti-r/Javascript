// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let sum = 0;
let counter = 0;
let evenCounter = 0;

do {
  let input = Number(prompt("enter a number"));
  sum += input;
  counter++;
  if (input % 2 == 0) {
    evenCounter++;
  }
} while (counter !== 20);

console.log(`There were ${evenCounter} even numbers.`);
