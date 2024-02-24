// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.
let sum = 0;
let counter = 0;
let input;

do {
  input = Number(prompt("enter a number"));
  sum += input;
  counter++;
} while (input !== 0);

console.log(`Average was ${sum / counter}`);
