"use strict";

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  try {
    // Simulate error
    //a + b
    throw new Error("Oops, something went wrong!");
  } catch (error) {
    // Handle any errors that occurred
    console.log(error.message);
  }
}
task1();

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  // Code here
  try {
    sum = task2 + task1;
  } catch (error) {
    // Handle any errors that occurred
    console.error("An error occurred during the operation:", error);
  }
}

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  try {
    // Attempt risky operation
    let result = riskyOperation();
    console.log("Operation successful:", result);
  } catch (error) {
    // Handle any errors that occurred
    console.error("An error occurred during the operation:", error);
  } finally {
    // Cleanup code that runs regardless of the operation's outcome
    console.log("Execution complete.");
  }
  // Code here
}
// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/
function task4() {
  try {
    console.log("outher try block");
    try {
      throw new Error("Nested error");
    } catch (error) {
      console.log("Nested catch block", error.message);
    }
  } catch (error) {
    console.log("Outer catch block", error.message);
  }
}
// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  // Code here
  try {
    if (index < 0 || index >= array.lenght) {
      throw new Error("Index out of bounds");
    }
    console.log("Value:", array[index]);
  } catch (error) {
    console.error(error.message);
  }
}
