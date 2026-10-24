# Image Gallery

A responsive image gallery built with HTML, CSS, and JavaScript. Users can browse a collection of images using previous and next buttons or select an image directly from the thumbnail list.

## Features

- Displays a large main image
- Navigate between images using previous and next buttons
- Select images using clickable thumbnails
- Circular navigation between the first and last images
- Updates the image title, alternative text, and counter
- Highlights the currently selected thumbnail
- Responsive layout for smaller screens
- Keyboard-operable navigation and thumbnail buttons
- Reduced-motion support

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

1. Open the project directory.
2. Open `index.html` in your browser.

No installation, dependencies, or build tools are required. The gallery loads its images from external Unsplash URLs, so an internet connection is required to display them.

## Concepts Practiced

- Storing related data in an array of objects
- Selecting DOM elements with `querySelector()` and `querySelectorAll()`
- Handling click events with `addEventListener()`
- Updating image attributes and text content
- Tracking application state with a variable
- Accessing data attributes with `dataset`
- Converting strings to numbers with `Number()`
- Using modulo arithmetic for circular navigation
- Updating CSS classes with `classList.toggle()`
- Synchronizing accessibility attributes
- Responding to image load and error events
- Separating HTML, CSS, and JavaScript

## How It Works

The gallery stores image information in an array of objects. The `showImage()` function updates the main image and its related information based on the selected array index.

The previous and next buttons use modulo arithmetic to support circular navigation. Thumbnail buttons select images directly using their `data-index` attributes, while the active thumbnail, image title, and counter are updated together.

## Scope

The gallery contains four predefined images loaded from external Unsplash URLs. It does not upload images, fetch gallery data from an API, or persist the selected image after the page is refreshed.