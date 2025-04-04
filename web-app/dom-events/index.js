// get element by tag name
document.getElementsByTagName("h1")[0];
// get h1 tag by css selector
document.querySelector("h1");
// create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
// Get element by class name
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);
// Append element in the HTML structure
addItemsContent[0].append(paragraph);
// Remove element
var spanE1 = document.getElementsByTagName("span")[0];
spanE1.remove();
// Event Listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Key Pressed", event.key);
});
// Add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    paragraph.remove();
    if (listItemValue !== "" && listItemValue !== " ") {
        //Added Input Value as List Item
        listItem.textContent = listItemValue;
        // Display list item on the screen
        list.append(listItem);
        // Clear the input value after adding it to the list
        itemInput.value = "";
        itemInput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        listItem.append(deleteBtn);
        deleteBtn.style.margin = "5px";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
addButton.addEventListener("click", function () { return addListItem(); });
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
