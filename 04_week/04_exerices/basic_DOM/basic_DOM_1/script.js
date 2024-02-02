/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const element = document.getElementById("content");
const button = document.querySelector("button");

const myFunction2 = () => (element.textContent = "Hello World!");

button.addEventListener("click", myFunction2);
