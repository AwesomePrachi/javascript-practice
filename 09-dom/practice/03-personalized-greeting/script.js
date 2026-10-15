const greetingForm = document.querySelector("#greetingForm");
const nameInput = document.querySelector("#nameInput");
const message = document.querySelector("#message");

greetingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    message.classList.remove("message--success", "message--error");

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.classList.add("message--error");
    } else {
        message.textContent = `Hello, ${name}!`;
        message.classList.add("message--success");
    }

    // Restart the animation when the message is updated.
    message.classList.remove("show");
    void message.offsetWidth;
    message.classList.add("show");
});