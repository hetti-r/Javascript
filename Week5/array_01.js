// Initial array of team members
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
console.log(teamMembers);
// Exercise 2: Remove the first member of the array.
// Write your code here:
teamMembers.shift();
console.log(teamMembers);
// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop();
console.log(teamMembers);
// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift("Alex");
console.log(teamMembers);
// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push("Linda");
console.log(teamMembers);
// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
const otherMembers = ["John", "Emily", "Mike", "Sarah"];
otherMembers.splice(0, 2);
console.log(otherMembers);
// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
console.log(teamMembers.indexOf("Mike"));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
console.log(teamMembers.indexOf("Jake"));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);
// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
const groupBob = ["Bob"];
const newGroup = teamMembers.concat(groupBob);
console.log(newGroup);
// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
console.log(teamMembers.slice(0, 4));
// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ["Tina", "Dean"];
// Write your code here:
const anotherGroup = teamMembers.concat(newMembers);
console.log(anotherGroup);
// Exercise 13: Finding all occurrences of a John
// Write your code here:
const whereIsJohn = teamMembers.filter((m) => m === "John");
console.log(whereIsJohn);
// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
const upperCase = teamMembers.map((m) => m.toUpperCase());
console.log(upperCase);
