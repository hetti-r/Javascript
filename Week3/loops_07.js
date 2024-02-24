/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */
let sum = 0;
let counter = 0;
let input;
let smallest = 0;
let biggest = 0;

do {
  input = Number(prompt("enter a number"));
  if (input === 0) {
    smallest = input;
    biggest = input;
  } else {
    smallest = Math.min(smallest, input);
    biggest = Math.max(biggest, input);
  }
  sum += input;
  counter++;
} while (counter < 11);

console.log(
  `The sum was ${sum}. Average was ${
    sum / counter
  }. Smallest number was ${smallest} and biggest was ${biggest}.`
);
