// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

let max = 98;

let answer = ``;

for (let start = 2; start < 100; start += 2) {
  answer += ` ` + start + ` `;
  answer += ` ` + max + ` `;
  max -= 2;
}

console.log(answer);
