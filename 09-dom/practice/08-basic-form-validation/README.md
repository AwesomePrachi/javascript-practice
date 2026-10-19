# Basic Form Validation

A small JavaScript DOM project that validates a name input and displays feedback when the form is submitted.

## Features

- Validates empty and whitespace-only input
- Displays an error message when the input is empty
- Displays a success message when validation passes
- Provides visual feedback through input styling
- Supports form submission using the Enter key
- Includes responsive styling and keyboard-focus indicators
- Respects reduced-motion preferences

## Technologies

- HTML5
- CSS3
- JavaScript

## Run Locally

Open `index.html` in your web browser.

## Concepts Practiced

- Selecting DOM elements with `document.querySelector()`
- Handling the `submit` and `input` events
- Preventing default form submission with `event.preventDefault()`
- Trimming input with `.trim()`
- Using conditional statements for validation
- Updating text with `textContent`
- Managing CSS classes with `classList`
- Displaying feedback through an accessible status message

## Note

This project demonstrates client-side validation. It does not send or store form data on a server.

## Possible Improvements

- Add validation rules for multiple fields
- Provide more detailed validation feedback
- Connect the form to a backend when practicing server-side submission