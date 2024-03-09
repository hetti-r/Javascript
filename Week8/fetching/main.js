/*const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        displayData(json);
        console.log(json);
    })
};*/

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    if (!response.ok) {
      throw new Error(`error status: ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector("#foxesContainer");

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <h2>${post.data.name}</h1>
    <p>${post.type}</p>
    <p>${post.desc}</p>
    <p>${post.address.street}</p>
    <p>${post.address.suite}</p>
    <p>${post.address.city}</p>
    `;
    container.appendChild(postElement);
  });
};
