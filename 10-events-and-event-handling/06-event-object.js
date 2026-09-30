// Event Object

// When an event occurs, the browser provides information
// about that event through an event object.

// The event object is commonly received as a parameter
// of the event handler.

const button = document.querySelector("#button");

const handleClick = (event) => {
    console.log(event);

    // The element on which the event occurred.
    console.log(event.target);

    // The type of event that occurred.
    console.log(event.type);
};

button.addEventListener("click", handleClick);


// Common Event Object Properties

// event.target
// The element on which the event occurred.

// event.type
// The type of event, such as "click", "submit",
// "keydown", or "mousemove".


// Keyboard Event Example

const handleKeyDown = (event) => {
    console.log(event.key);
};

window.addEventListener("keydown", handleKeyDown);


// Mouse Event Example

const handleMouseMove = (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
};

window.addEventListener("mousemove", handleMouseMove);


// preventDefault()

// preventDefault() prevents the browser's default action
// associated with an event when applicable.
//
// Example:
//
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// });