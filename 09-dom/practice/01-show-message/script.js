const showMessageButton = document.querySelector("#showBtn");
const messageParagraph = document.querySelector("#message");

showMessageButton.addEventListener("click", () => {
    messageParagraph.textContent = "Welcome to JavaScript DOM!";
});
