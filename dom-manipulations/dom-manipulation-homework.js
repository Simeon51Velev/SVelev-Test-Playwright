// 1. Change the text of the h1 tag
var title = document.getElementById("title");
title.textContent = "TypeScript DOM Manipulations";
// 2. Change the color of the paragraph inside div.content
var paragraphHomework = document.querySelector(".content p");
paragraphHomework.style.color = "green";
// 3. Change the list items' textContent to a list of fruits
var listItems = document.querySelectorAll("#list li");
var fruitsHomework = ["Mango", "Guava", "Pineapple"];
listItems.forEach(function (item, index) {
    item.textContent = fruitsHomework[index];
});
// 4. Add a button and apply border style "1px solid red" to it
var button = document.createElement("button");
button.textContent = "Button!";
button.style.border = "1px solid red";
button.style.padding = "10px 10px";
button.style.fontSize = "15px";
button.style.cursor = "pointer";
button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "#f0f0f0";
    button.style.color = "#007BFF";
});
button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "";
    button.style.color = "";
});
button.addEventListener("click", function () {
    alert("The button is clicked");
});
document.body.appendChild(button);
