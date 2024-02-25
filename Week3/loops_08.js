// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let sum = 0;
let input;
let smallest = 0;
let biggest = 0;

let counter = Number(prompt("How many numbers do you want to give?"));

do {
  input = Number(prompt("enter a number"));
  if (input === 0) {
    smallest = input;
    biggest = input;
  } else {
    smallest = Math.min(smallest, input);
    biggest = Math.max(biggest, input);
  }
  counter = counter - 1;
} while (counter > 0);

console.log(`Smallest number was ${smallest} and biggest was ${biggest}.`);
