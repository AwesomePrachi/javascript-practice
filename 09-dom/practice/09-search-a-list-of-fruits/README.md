# Search a List of Fruits

A small JavaScript DOM practice project that filters a predefined list of fruits as the user types into a search field.

## Features

- Search by full or partial fruit name
- Case-insensitive matching
- Live filtering while typing
- Dynamic result count
- Empty-state message when no fruits match
- Responsive dark-themed interface
- Accessible search label and result feedback

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

1. Clone or download this repository.
2. Open the `09-dom/practice/09-search-a-list-of-fruits/` directory.
3. Open `index.html` in a web browser.

No installation or build tools are required.

## Concepts Practiced

- DOM selection with `querySelector()` and `querySelectorAll()`
- Event handling with the `input` event
- String methods: `trim()`, `toLowerCase()`, and `includes()`
- Iterating through DOM elements with `forEach()`
- Conditional logic and result counting
- Updating content with `textContent`
- Toggling CSS classes with `classList.toggle()`
- Showing and hiding elements with the `hidden` property
- Basic accessibility and reduced-motion support

## How It Works

The search input listens for changes as the user types. Each fruit name is normalized to lowercase and compared with the search term. Matching fruits remain visible, nonmatching fruits are hidden, and the result count updates automatically.

If no fruit matches, an empty-state message is displayed.

## Scope

This project filters a fixed list of fruits already present in the HTML. It does not use an external API or database.