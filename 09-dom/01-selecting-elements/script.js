// DOM Selection

// The DOM (Document Object Model) represents the HTML document
// as a tree of objects that JavaScript can access and manipulate.


// getElementById()

const heading = document.getElementById("heading");

console.log(heading);


// getElementsByClassName()

const items = document.getElementsByClassName("item");

console.log(items);

// Returns an HTMLCollection.
// HTMLCollection is array-like, but it is not a real Array.


// querySelector()

const firstItem = document.querySelector(".item");

console.log(firstItem);

// Returns the first element that matches the CSS selector.


// querySelectorAll()

const allItems = document.querySelectorAll(".item");

console.log(allItems);

// Returns a NodeList containing all matching elements.


// Selecting Elements by Tag

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);


// console.log() vs console.dir()

console.log(heading);

console.dir(heading);

// console.log() displays the element.
// console.dir() displays the element as an object with its properties.