// Keyboard Events


// keydown Event

// The "keydown" event fires when a key is pressed.

const display = document.querySelector("#display");

const handleKeyDown = (event) => {
    if (event.key === " ") {
        display.textContent = "Space";
    } else {
        display.textContent = event.key;
    }
};

window.addEventListener("keydown", handleKeyDown);


// Checking Specific Keys

// Examples:
//
// event.key === "Enter"
// event.key === "Backspace"
// event.key === "Escape"
// event.key === "ArrowUp"
// event.key === "ArrowDown"