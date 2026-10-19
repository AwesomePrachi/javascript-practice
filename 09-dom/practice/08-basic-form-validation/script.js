const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const message = document.querySelector("#message");

nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    // Reset previous validation feedback.
    nameInput.classList.remove("invalid", "valid");
    message.classList.remove("success", "error", "show");

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.classList.add("error");
        nameInput.classList.add("invalid");
        nameInput.focus();
    } else {
        message.textContent = "Form submitted successfully!";
        message.classList.add("success");
        nameInput.classList.add("valid");
    }

    // Show the feedback message.
    message.hidden = false;

    // Restart the animation when the message is updated.
    void message.offsetWidth;
    message.classList.add("show");
});

// Clear the previous input styling while the user edits the value.
nameInput.addEventListener("input", () => {
    nameInput.classList.remove("invalid", "valid");
});