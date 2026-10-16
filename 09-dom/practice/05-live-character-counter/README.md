# Live Character Counter

A beginner-friendly JavaScript DOM project that updates a character count as the user types.

## Features

- Updates the character count immediately
- Limits input to 50 characters
- Displays progress towards the character limit
- Changes counter and progress-bar colors near the limit
- Responsive dark-themed interface
- Respects reduced-motion preferences

## Technologies

- HTML5
- CSS3
- JavaScript

## Run Locally

Open `index.html` in a web browser.

## Concepts Practiced

- Selecting DOM elements with `document.querySelector()`
- Handling the `input` event
- Reading `.value` and `.length`
- Updating text with `textContent`
- Updating styles dynamically
- Updating ARIA progress values
- Using `classList` to reflect UI state

## Note

JavaScript's string `length` counts UTF-16 code units. Some characters, including many emoji, count as two code units. This is expected for this beginner exercise.