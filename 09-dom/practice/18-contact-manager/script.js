// 1. Initial contacts

let contacts = [
    {
        id: 1,
        name: "Priya Sharma",
        phone: "9876543210"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        phone: "8765432109"
    },
    {
        id: 3,
        name: "Ananya Patel",
        phone: "7654321098"
    }
];


// 2. Select HTML elements

const contactForm = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactPhone = document.querySelector("#contactPhone");

const searchInput = document.querySelector("#searchInput");
const contactList = document.querySelector("#contactList");

const totalContacts = document.querySelector("#totalContacts");
const contactCount = document.querySelector("#contactCount");

const formMessage = document.querySelector("#formMessage");


// 3. Display form feedback

function showMessage(message, type) {
    formMessage.textContent = message;

    formMessage.className = `form-message ${type}`;
}


// 4. Validate phone number

function isValidPhone(phone) {
    // Allow an optional leading +, digits, spaces, hyphens and parentheses.
    const phonePattern = /^\+?[0-9][0-9\s()-]*$/;

    // Count only digits.
    const digitCount = phone.replace(/\D/g, "").length;

    return phonePattern.test(phone) &&
        digitCount >= 7 &&
        digitCount <= 15;
}


// 5. Normalize phone number for duplicate checking

function normalizePhone(phone) {
    return phone.replace(/\D/g, "");
}


// 6. Add a new contact

function addContact(name, phone) {
    const normalizedPhone = normalizePhone(phone);

    // Check whether the phone number already exists.
    const contactExists = contacts.some(function (contact) {
        return normalizePhone(contact.phone) === normalizedPhone;
    });

    if (contactExists) {
        showMessage(
            "This phone number already exists in your contacts.",
            "error"
        );

        return false;
    }

    // Create a new contact object.
    const newContact = {
        id: Date.now(),
        name: name,
        phone: phone
    };

    // Add the new contact to the array.
    contacts.push(newContact);

    return true;
}


// 7. Handle form submission

contactForm.addEventListener("submit", function (event) {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // Get and clean input values.
    const name = contactName.value.trim();
    const phone = contactPhone.value.trim();

    // Validate empty fields.
    if (name === "" || phone === "") {
        showMessage(
            "Please enter both name and phone number.",
            "error"
        );

        return;
    }

    // Validate phone number.
    if (!isValidPhone(phone)) {
        showMessage(
            "Enter a valid phone number containing 7 to 15 digits.",
            "error"
        );

        return;
    }

    // Add the contact.
    const contactAdded = addContact(name, phone);

    if (!contactAdded) {
        return;
    }

    // Reset the form and search.
    contactForm.reset();
    searchInput.value = "";

    // Update the displayed contacts.
    renderContacts();

    // Show success feedback.
    showMessage(
        `${name} has been added successfully.`,
        "success"
    );

    // Return focus to the name input.
    contactName.focus();
});


// 8. Display contacts

function renderContacts() {
    // Get the search value.
    const searchValue = searchInput.value.trim().toLowerCase();

    // Filter contacts by name.
    const filteredContacts = contacts.filter(function (contact) {
        return contact.name.toLowerCase().includes(searchValue);
    });

    // Clear previously displayed contact cards.
    contactList.replaceChildren();

    // Update total contact count.
    totalContacts.textContent = contacts.length;

    contactCount.textContent =
        `${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"}`;

    // Show an empty state when no contacts match.
    if (filteredContacts.length === 0) {
        showEmptyState();

        return;
    }

    // Create and display each contact card.
    filteredContacts.forEach(function (contact) {
        const contactItem = document.createElement("article");
        contactItem.className = "contact-item";

        // Create avatar.
        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = contact.name.charAt(0);
        avatar.setAttribute("aria-hidden", "true");

        // Create contact details.
        const details = document.createElement("div");
        details.className = "contact-details";

        const name = document.createElement("p");
        name.className = "contact-name";
        name.textContent = contact.name;

        const phone = document.createElement("p");
        phone.className = "contact-phone";
        phone.textContent = contact.phone;

        details.append(name, phone);

        // Create delete button.
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "×";

        deleteButton.setAttribute(
            "aria-label",
            `Delete ${contact.name}`
        );

        // Store the contact ID in a data attribute.
        deleteButton.dataset.id = contact.id;

        // Handle delete button click.
        deleteButton.addEventListener("click", function () {
            deleteContact(contact.id);
        });

        // Add elements to the contact card.
        contactItem.append(avatar, details, deleteButton);

        // Add the contact card to the list.
        contactList.appendChild(contactItem);
    });
}


// 9. Display empty states

function showEmptyState() {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    const icon = document.createElement("div");
    icon.className = "empty-icon";
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("p");
    title.className = "empty-title";

    const description = document.createElement("p");
    description.className = "empty-description";

    if (contacts.length === 0) {
        icon.textContent = "♧";

        title.textContent = "No contacts yet";

        description.textContent =
            "Add your first contact to get started.";
    } else {
        icon.textContent = "⌕";

        title.textContent = "No contacts found";

        description.textContent =
            "Try searching with a different name.";
    }

    // Add the empty-state elements.
    emptyState.append(icon, title, description);

    contactList.appendChild(emptyState);
}


// 10. Search contacts by name

searchInput.addEventListener("input", function () {
    renderContacts();
});


// 11. Delete a contact

function deleteContact(id) {
    // Keep all contacts except the selected contact.
    contacts = contacts.filter(function (contact) {
        return contact.id !== id;
    });

    // Update the contact list.
    renderContacts();

    showMessage(
        "Contact deleted successfully.",
        "success"
    );
}


// 12. Initial rendering

renderContacts();