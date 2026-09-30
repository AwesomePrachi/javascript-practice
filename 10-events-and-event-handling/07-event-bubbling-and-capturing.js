// Event Bubbling and Capturing


// Event Propagation

// When an event occurs, it travels through the DOM
// in different phases:
//
// 1. Capturing phase
// 2. Target phase
// 3. Bubbling phase


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const button = document.querySelector("#button");


// Bubbling Phase

// By default, event listeners are registered for the
// bubbling phase.

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});

button.addEventListener("click", () => {
    console.log("Button clicked");
});

// If the button is clicked, the bubbling order is:
//
// Button clicked
// Child clicked
// Parent clicked


// Capturing Phase

// Passing true as the third argument registers the
// listener for the capturing phase.

parent.addEventListener(
    "click",
    () => {
        console.log("Parent capture");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Child capture");
    },
    true
);


// When the button is clicked, capture listeners run
// while the event travels toward the target.
//
// Capturing:
//
// Parent
//   ↓
// Child
//   ↓
// Button
//
// Then the target and bubbling phases occur.