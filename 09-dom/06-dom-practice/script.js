// DOM Practice


// 1. Update a Heading

const heading = document.querySelector("#heading");

heading.textContent = "Welcome to Prachi's World!";


// 2. Update Paragraph with HTML

const description = document.querySelector("#description");

description.innerHTML = "<strong>Updated</strong> by JavaScript";


// 3. Remove the disabled Attribute

const disabledButton = document.querySelector("#disabled-button");

disabledButton.removeAttribute("disabled");


// 4. Print All List Items

const listItems = document.querySelectorAll("#fruit-list li");

listItems.forEach((item) => {
    console.log(item.textContent);
});


// 5. Add a New List Item

const fruitList = document.querySelector("#fruit-list");

const newItem = document.createElement("li");

newItem.textContent = "New Fruit";

fruitList.appendChild(newItem);


// 6. Remove the First List Item

const firstItem = fruitList.querySelector("li");

firstItem.remove();


// 7. Highlight Even List Items

const remainingItems = fruitList.querySelectorAll("li");

remainingItems.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
        item.classList.add("highlight");
    }
});


// 8. Create an Element Dynamically

const container = document.querySelector("#container");

const message = document.createElement("p");

message.textContent = "This paragraph was created dynamically.";

container.append(message);