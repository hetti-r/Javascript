/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temp) {
  if (temp < 15) {
    console.log("You should wear a jacket!");
  } else {
    console.log("It's quite warm.");
  }
}

let ask = promt("What is the current temperature?");

let number = Number(example);

getTemperature(number);
