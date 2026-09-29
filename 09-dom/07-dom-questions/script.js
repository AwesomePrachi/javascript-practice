// Common DOM Questions


// 1. What is the DOM?

// The DOM (Document Object Model) represents an HTML document
// as a tree of objects that JavaScript can access and manipulate.


// 2. Element Node vs Text Node

// Example:
// <a>Hello <b>Prachi</b></a>
//
// <a> and <b> are element nodes.
//
// "Hello " and "Prachi" are text nodes.
//
// Element nodes can contain child nodes.


// 3. What does getElementsByClassName() return?

const items = document.getElementsByClassName("item");

console.log(items);

// It returns a live HTMLCollection.
// HTMLCollection is array-like, but it is not a real Array.


// 4. What does querySelectorAll() return?

const allItems = document.querySelectorAll(".item");

console.log(allItems);

// It returns a static NodeList containing all matching elements.


// 5. textContent vs innerText

// textContent gets or sets the text content of an element.
//
// innerText gets or sets the rendered text of an element.
//
// They can produce different results when CSS affects visibility.


// 6. What does innerHTML do?

// innerHTML gets or sets HTML markup inside an element.

const heading = document.querySelector("#heading");

heading.innerHTML = "<i>DOM Questions</i>";


// 7. What does createElement() do?

// createElement() creates a new DOM element.
// The element is not visible in the document until it is added.

const newParagraph = document.createElement("p");

newParagraph.textContent = "Created dynamically.";

document.body.append(newParagraph);


// 8. How do you change an attribute?

heading.setAttribute("title", "DOM heading");

console.log(heading.getAttribute("title"));


// 9. How do you remove an attribute?

heading.removeAttribute("title");


// 10. How do you change an element's style?

heading.style.color = "blue";


// 11. How do you add a CSS class?

heading.classList.add("highlight");


// 12. How do you remove a CSS class?

heading.classList.remove("highlight");


// 13. How do you toggle a CSS class?

heading.classList.toggle("highlight");