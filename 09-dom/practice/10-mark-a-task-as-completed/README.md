# Mark a Task as Completed

A small JavaScript DOM practice project that lets users mark tasks as completed using checkboxes and track their overall progress.

## Features

- Mark tasks as completed or incomplete
- Apply strikethrough styling to completed tasks
- Calculate the number of completed tasks
- Update a progress bar and completion count
- Responsive dark-themed interface
- Keyboard-accessible checkboxes

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

1. Open the project directory.
2. Open `index.html` in your browser.

No installation or build tools are required.

## Concepts Practiced

- DOM selection with `querySelector()` and `querySelectorAll()`
- Handling the `change` event
- Reading checkbox state through `.checked`
- Finding related elements with `closest()`
- Toggling CSS classes with `classList.toggle()`
- Counting checked elements
- Calculating percentages
- Updating text, inline styles, and ARIA attributes
- Separating HTML, CSS, and JavaScript

## How It Works

Each checkbox listens for a change event. When its state changes, the corresponding task label receives or loses the `completed` class. The progress function then recalculates the number of checked tasks and updates the completion count and progress bar.

## Scope

The project uses a predefined list of three tasks. Task completion is not saved after the page is refreshed.