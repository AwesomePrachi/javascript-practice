// Form Submit Events


// Selecting Elements

const form = document.querySelector("#profileForm");
const nameInput = document.querySelector("#name");
const occupationInput = document.querySelector("#occupation");
const infoInput = document.querySelector("#info");
const output = document.querySelector("#output");


// Form Submit Handler

const handleSubmit = (event) => {
    // Prevent the browser's default form submission.
    event.preventDefault();

    const name = nameInput.value.trim();
    const occupation = occupationInput.value.trim();
    const info = infoInput.value.trim();

    if (!name || !occupation || !info) {
        console.log("Please fill in all fields.");
        return;
    }

    const card = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = name;

    const occupationElement = document.createElement("h4");
    occupationElement.textContent = occupation;

    const paragraph = document.createElement("p");
    paragraph.textContent = info;

    card.appendChild(heading);
    card.appendChild(occupationElement);
    card.appendChild(paragraph);

    output.appendChild(card);

    form.reset();
};

form.addEventListener("submit", handleSubmit);