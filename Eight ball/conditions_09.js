/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. 
Implement the program using conditional statements to select and display one of several predefined responses. */

let ask = prompt("Ask me a question!");

function getAnswer() {
  const randomNumber = Math.floor(Math.random() * 7) + 1;
  switch (randomNumber) {
    case 1:
      console.log("Definitely Yes");
      break;
    case 2:
      console.log("Absolutely No");
      break;
    case 3:
      console.log("Maybe if you are feeling lucky");
      break;
    case 4:
      console.log("Never, do not even dream about it");
      break;
    case 5:
      console.log("The Stars and Planets are against you");
      break;
    case 6:
      console.log("Faith has something else in its mind");
      break;
    case 7:
      console.log("Yes, it is your lucky day");
      break;
  }
}

getAnswer();
