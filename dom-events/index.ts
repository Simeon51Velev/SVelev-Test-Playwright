// get element by tag name
document.getElementsByTagName("h1")[0];

// get h1 tag by css selector
document.querySelector("h1");

// create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "This is our created paragraph";

// Get element by class name
const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);

// Append element in the HTML structure
addItemsContent[0].append(paragraph);

// Remove element
const spanE1: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanE1.remove();

// Event Listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Key Pressed", event.key);
});

// Add and remove list items

const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLLIElement;

function addListItem() {
  const listItem: HTMLElement = document.createElement("li");
  const listItemValue: string | number = itemInput.value;

  paragraph.remove();

  if (listItemValue !== "" && listItemValue !== " ") {
    //Added Input Value as List Item
    listItem.textContent = listItemValue;
    // Display list item on the screen
    list.append(listItem);

    // Clear the input value after adding it to the list
    itemInput.value = "";
    itemInput.focus();

    const deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.append(deleteBtn);

    deleteBtn.style.margin = "5px";

    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  }
}

addButton.addEventListener("click", () => addListItem());

itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});
