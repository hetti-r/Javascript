// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.
let sum = 0;
let counter = 0;
let input2;

do {
  let input = Number(prompt("enter a number"));
  sum += input;
  counter++;
  input2 = prompt("Continue? y/n");
} while (input2 == "y");

console.log(`Average was ${sum / counter}`);
