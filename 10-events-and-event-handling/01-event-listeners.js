// Event Listeners

// An event represents an action that occurs in the browser,
// such as a click, double-click, input, or key press.

// addEventListener() is used to register a function
// that should run when a specific event occurs.


// Selecting an Element

const button = document.querySelector("#button");


// Adding an Event Listener

const handleClick = () => {
    console.log("Button clicked.");
};

button.addEventListener("click", handleClick);


// Double-Click Event

const handleDoubleClick = () => {
    console.log("Button double-clicked.");
};

button.addEventListener("dblclick", handleDoubleClick);


// Removing an Event Listener

// removeEventListener() removes a previously registered
// event listener.

// The same function reference must be used.

// Example:

// button.removeEventListener("dblclick", handleDoubleClick);