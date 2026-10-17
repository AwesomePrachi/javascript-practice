# Add Items to a List

A beginner-friendly JavaScript DOM project that lets users add items to a list.

## Features

- Add an item using the button or Enter key
- Prevent empty or whitespace-only items
- Update the item count automatically
- Show an empty-state message when the list has no items
- Clear and refocus the input after adding an item
- Responsive layout and reduced-motion support

## Technologies

- HTML5
- CSS3
- JavaScript

## Run Locally

Open `index.html` in a web browser.

## Concepts Practiced

- Handling form submission with `addEventListener()`
- Preventing default form submission with `event.preventDefault()`
- Reading and trimming input with `.value` and `.trim()`
- Creating elements with `document.createElement()`
- Safely inserting user input with `textContent`
- Adding elements with `append()`
- Counting child elements with `.children.length`
- Updating the DOM with `hidden` and `textContent`

## Note

Items are stored only while the current page remains open. Refreshing the page clears the list; this project does not use local storage or a backend.