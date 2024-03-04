"use strict";
const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector("#searchForm");

const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (event) => {
  event.preventDefault();
  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  const newCar = new Car(license, maker, model, owner, price, color);
  cars.push(newCar);
  displayTable();

  addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");
  table.innerHTML = table.rows[0].innerHTML;

  cars.forEach((car) => {
    const row = table.insertRow(-1); // -1 = last row
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCar = (e) => {
  e.preventDefault();
  const licenseQuery = document
    .querySelector("searchResult")
    .value.trim()
    .toLowercase();

  const display = document.querySelector("#searchResult");
  if (!licenseQuery) {
    display.textContent = "Please submit the license";
    return;
  }

  try {
    const result = cars.find(({ license }) =>
      license.toLowercase().includes(licenseQuery)
    );
    display.textContent = result
      ? `Found ${result.maker}, owned by ${result.owner}`
      : "No car with that license plate";
  } catch (error) {
    console.error("Error occured:", error);
    display.textContent = "Something went bobbity boo";
  }

  display.textContent = licenseQuery;
};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);
