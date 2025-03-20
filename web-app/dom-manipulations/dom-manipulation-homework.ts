// 1. Change the text of the h1 tag

const title = document.getElementById("title") as HTMLElement;
title.textContent = "TypeScript DOM Manipulations";

// 2. Change the color of the paragraph inside div.content

const paragraphHomework = document.querySelector(".content p") as HTMLElement;
paragraphHomework.style.color = "green";

// 3. Change the list items' textContent to a list of fruits

let listItems = document.querySelectorAll(
  "#list li"
) as NodeListOf<HTMLElement>;
let fruitsHomework = ["Mango", "Guava", "Pineapple"];

listItems.forEach((item, index) => {
  item.textContent = fruitsHomework[index];
});

// 4. Add a button and apply border style "1px solid red" to it

let button = document.createElement("button");
button.textContent = "Button!";
button.style.border = "1px solid red";
button.style.padding = "10px 10px";
button.style.fontSize = "15px";
button.style.cursor = "pointer";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#f0f0f0";
  button.style.color = "#007BFF";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
  button.style.color = "";
});

button.addEventListener("click", () => {
  alert("The button is clicked");
});

document.body.appendChild(button);
