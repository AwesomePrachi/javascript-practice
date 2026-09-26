// Input and Change Events


// Input Event

// The "input" event fires whenever the user changes
// the value of an input, textarea, or similar form control.

const input = document.querySelector("#nameInput");

const handleInput = (event) => {
    console.log(event.target.value);
};

input.addEventListener("input", handleInput);


// Change Event

// The "change" event runs when the value of a form control
// has been changed and the change is committed.
//
// For a select element, it runs when a different option
// is selected.

const select = document.querySelector("#deviceSelect");
const message = document.querySelector("#message");

const handleChange = (event) => {
    message.textContent = `${event.target.value} selected`;
};

select.addEventListener("change", handleChange);

// Required HTML:

// <input id="nameInput" type="text" placeholder="Enter your name">

// <select id="deviceSelect">
//     <option value="">Select a device</option>
//     <option value="iQOO">iQOO</option>
//     <option value="Vivo">Vivo</option>
//     <option value="Motorola">Motorola</option>
// </select>

// <p id="message"></p>