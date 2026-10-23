# FAQ Accordion

A responsive FAQ accordion built with HTML, CSS, and JavaScript. Users can click a question to show its answer and click it again to hide the answer.

## Features

- Three interactive FAQ questions
- Show and hide answers by clicking a question
- Support for keeping multiple answers open
- Visual styling for expanded questions
- Responsive layout for smaller screens
- Keyboard-operable question buttons
- Accessible expanded-state information
- Reduced-motion support

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

1. Open the project directory.
2. Open `index.html` in your browser.

No installation, dependencies, or build tools are required.

## Concepts Practiced

- Selecting multiple elements with `querySelectorAll()`
- Iterating over elements with `forEach()`
- Handling click events with `addEventListener()`
- Finding related elements with `closest()`
- Retrieving attributes with `getAttribute()`
- Toggling CSS classes with `classList.toggle()`
- Checking element state with `classList.contains()`
- Controlling visibility with the `hidden` property
- Updating accessibility attributes with `setAttribute()`
- Separating HTML, CSS, and JavaScript

## How It Works

JavaScript selects all FAQ question buttons and attaches a click listener to each one. When a question is clicked, the code finds its containing FAQ item and the corresponding answer using the button's `aria-controls` attribute.

The script toggles the item's active state, updates the answer's visibility, and synchronizes the button's `aria-expanded` attribute.

## Scope

The project uses three predefined questions and answers. Multiple answers can remain open simultaneously. The project does not fetch FAQ data from an API or save accordion state after the page is refreshed.