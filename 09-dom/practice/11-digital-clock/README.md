# Digital Clock

A responsive digital clock built with HTML, CSS, and JavaScript. It displays the current local time and date, updating the time every second.

## Features

- Displays hours, minutes, and seconds in 24-hour format
- Shows the current date, including weekday, day, month, and year
- Updates the displayed time every second
- Formats time values with leading zeros
- Responsive layout for smaller screens
- Dark-themed interface with subtle animations
- Supports reduced-motion preferences

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

1. Open the project directory.
2. Open `index.html` in your browser.

No installation, dependencies, or build tools are required.

## Concepts Practiced

- DOM selection with `querySelector()`
- Updating content with `textContent`
- Working with the JavaScript `Date` object
- Extracting hours, minutes, and seconds
- Formatting strings with `String()` and `padStart()`
- Formatting dates with `toLocaleDateString()`
- Repeating a function with `setInterval()`
- Separating HTML, CSS, and JavaScript

## How It Works

The `updateClock()` function creates a new `Date` object, extracts the current local time, formats each time value with two digits, and updates the corresponding HTML elements. It also formats and displays the current date.

The function runs once when the page loads and then runs every second using `setInterval()`.

## Scope

The clock uses the browser environment's local time zone and displays time in 24-hour format. It does not include alarms, time-zone selection, or persistent data storage.