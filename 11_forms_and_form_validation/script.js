const form = document.querySelector("#profileForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
    // Stop the browser from navigating away.
    event.preventDefault();

    // The browser has already checked required fields,
    // input types, and HTML length constraints.
    formMessage.textContent =
        "The form passed the browser's built-in validation.";

    console.log("Form validation passed.");
});