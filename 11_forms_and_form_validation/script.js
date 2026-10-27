const form = document.querySelector("#profileForm");

const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const formMessage = document.querySelector("#formMessage");

// A simplified email-format pattern for practice
const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

// Demonstration: test a fixed username string
const usernameRegex = /^[a-zA-Z0-9._]+$/;

console.log(
    "Is the example username valid?",
    usernameRegex.test("Prachi_patel123")
);

function validateForm(event) {
    event.preventDefault();

    const name = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;

    // Reset previous validation messages
    nameError.hidden = true;
    emailError.hidden = true;
    passwordError.hidden = true;

    formMessage.textContent = "";
    formMessage.className = "form-message";

    let isValid = true;

    // Validate the name
    if (name.length < 3) {
        nameError.hidden = false;
        isValid = false;
    }

    // Validate the email format
    if (!emailValue || !emailRegex.test(emailValue)) {
        emailError.hidden = false;
        isValid = false;
    }

    // Validate password length
    if (passwordValue.length < 8) {
        passwordError.hidden = false;
        isValid = false;
    }

    if (!isValid) {
        formMessage.textContent =
            "Please correct the highlighted fields and try again.";

        formMessage.classList.add("error");
        return;
    }

    formMessage.textContent =
        "All fields passed the practice validation.";

    formMessage.classList.add("success");

    // Demonstration only: no data is sent to a server
    console.log("Name:", name);
    console.log("Email format is valid:", true);
    console.log("Selected option:", form.elements.gender.value);
}

// Validate when the form is submitted
form.addEventListener("submit", validateForm);

// Clear each field's error when its value becomes valid
userName.addEventListener("input", function () {
    if (userName.value.trim().length >= 3) {
        nameError.hidden = true;
    }
});

email.addEventListener("input", function () {
    if (emailRegex.test(email.value.trim())) {
        emailError.hidden = true;
    }
});

password.addEventListener("input", function () {
    if (password.value.length >= 8) {
        passwordError.hidden = true;
    }
});