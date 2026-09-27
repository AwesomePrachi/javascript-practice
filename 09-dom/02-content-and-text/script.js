// Content and Text Manipulation


// textContent

const heading = document.querySelector("#heading");

heading.textContent = "Updated Heading";

console.log(heading.textContent);


// innerText

const paragraph = document.querySelector("#paragraph");

paragraph.innerText = "Updated paragraph content.";

console.log(paragraph.innerText);


// innerHTML

const content = document.querySelector("#content");

content.innerHTML = "<i>Updated HTML content</i>";


// Difference

// textContent
// Gets or sets the text content of an element.

// innerText
// Gets or sets the rendered text of an element.

// innerHTML
// Gets or sets the HTML markup inside an element.


// Example:

heading.textContent = "Hello <i>JavaScript</i>";

paragraph.innerText = "Hello JavaScript";

content.innerHTML = "<i>Hello JavaScript</i>";