// Creating and Removing DOM Elements


// createElement()

const heading = document.createElement("h2");

heading.textContent = "Created with JavaScript";

console.log(heading);


// append()

const container = document.querySelector("#container");

container.append(heading);


// prepend()

const firstParagraph = document.createElement("p");

firstParagraph.textContent = "Added at the beginning.";

container.prepend(firstParagraph);


// appendChild()

const list = document.querySelector("#task-list");

const newTask = document.createElement("li");

newTask.textContent = "New Task";

list.appendChild(newTask);


// remove()

const temporaryElement = document.createElement("p");

temporaryElement.textContent = "This element will be removed.";

container.append(temporaryElement);

temporaryElement.remove();


// removeChild()

const firstTask = list.querySelector("li");

list.removeChild(firstTask);