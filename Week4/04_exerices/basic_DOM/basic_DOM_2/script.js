/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
let fruitList = document.querySelector("#fruitList");
let fruitInput = document.querySelector("#fruitInput");

const addFruit = () => {
  if (fruitInput) {
    let newElement = document.createElement("li");
    newElement.textContent = fruitInput.value.trim();
    fruitList.appendChild(newElement);
    fruitInput.value = "";
  } else {
    alert("Enter Fruit");
  }
};

const button = document.querySelector("#addFruitBtn");
button.addEventListener("click", addFruit);
