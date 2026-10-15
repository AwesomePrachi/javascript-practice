const passwordInput = document.querySelector("#passwordInput");
const toggleButton = document.querySelector("#toggleBtn");

toggleButton.addEventListener("click", () => {
    const isPasswordHidden = passwordInput.type === "password";

    passwordInput.type = isPasswordHidden ? "text" : "password";

    toggleButton.textContent = isPasswordHidden
        ? "Hide password"
        : "Show password";
});