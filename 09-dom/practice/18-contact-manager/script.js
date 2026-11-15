// 1. Initial contacts
let contacts = [
  { id: 1, name: "Priya Sharma", phone: "9876543210" },
  { id: 2, name: "Rahul Mehta", phone: "8765432109" },
  { id: 3, name: "Ananya Patel", phone: "7654321098" }
];

// 2. Select HTML elements
const contactList = document.querySelector("#contactList");
const totalContacts = document.querySelector("#totalContacts");
const contactCount = document.querySelector("#contactCount");

const contactForm = document.querySelector("#contactForm");
const contactName = document.querySelector("#contactName");
const contactPhone = document.querySelector("#contactPhone");

const searchInput = document.querySelector("#searchInput");
const formMessage = document.querySelector("#formMessage");

// 3. Show success and error messages
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

// 4. Clear input validation styles
function clearInputErrors() {
  contactName.classList.remove("input-error");
  contactPhone.classList.remove("input-error");
}

// 5. Validate phone number
function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, "");

  return /^\+?[\d\s()-]+$/.test(phone) &&
    digitsOnly.length >= 7 &&
    digitsOnly.length <= 15;
}

// 6. Normalize phone number for duplicate checking
function normalizePhone(phone) {
  return phone.replace(/\D/g, "");
}

// 7. Display contacts
function renderContacts(filteredContacts = contacts) {
  contactList.replaceChildren();

  // Update contact statistics
  totalContacts.textContent = contacts.length;

  contactCount.textContent =
    `${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"}`;

  // Empty state: no contacts
  if (contacts.length === 0) {
    showEmptyState(
      "No contacts yet",
      "Add your first contact to get started.",
      "♧"
    );

    return;
  }

  // Empty state: no search results
  if (filteredContacts.length === 0) {
    showEmptyState(
      "No contacts found",
      "Try searching with a different name.",
      "⌕"
    );

    return;
  }

  // Render each contact
  filteredContacts.forEach(function (contact) {
    const contactItem = document.createElement("article");
    contactItem.className = "contact-item";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = contact.name.charAt(0).toUpperCase();
    avatar.setAttribute("aria-hidden", "true");

    const details = document.createElement("div");
    details.className = "contact-details";

    const name = document.createElement("p");
    name.className = "contact-name";
    name.textContent = contact.name;

    const phone = document.createElement("p");
    phone.className = "contact-phone";
    phone.textContent = contact.phone;

    details.append(name, phone);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "×";

    deleteButton.setAttribute(
      "aria-label",
      `Delete ${contact.name}`
    );

    deleteButton.addEventListener("click", function () {
      deleteContact(contact.id);
    });

    contactItem.append(avatar, details, deleteButton);

    contactList.appendChild(contactItem);
  });
}

// 8. Display empty states
function showEmptyState(title, message, icon) {
  const emptyState = document.createElement("div");
  emptyState.className = "empty-state";

  const emptyIcon = document.createElement("div");
  emptyIcon.className = "empty-icon";
  emptyIcon.textContent = icon;
  emptyIcon.setAttribute("aria-hidden", "true");

  const heading = document.createElement("h3");
  heading.textContent = title;

  const description = document.createElement("p");
  description.textContent = message;

  emptyState.append(emptyIcon, heading, description);

  contactList.appendChild(emptyState);
}

// 9. Add a new contact
function addContact(event) {
  event.preventDefault();

  clearInputErrors();

  const name = contactName.value.trim();
  const phone = contactPhone.value.trim();

  // Validate name
  if (name === "") {
    showMessage("Please enter a contact name.", "error");
    contactName.classList.add("input-error");
    contactName.focus();
    return;
  }

  // Validate phone input
  if (phone === "") {
    showMessage("Please enter a phone number.", "error");
    contactPhone.classList.add("input-error");
    contactPhone.focus();
    return;
  }

  // Validate phone format
  if (!isValidPhone(phone)) {
    showMessage(
      "Enter a valid phone number containing 7 to 15 digits.",
      "error"
    );

    contactPhone.classList.add("input-error");
    contactPhone.focus();
    return;
  }

  // Check for duplicate phone numbers
  const normalizedPhone = normalizePhone(phone);

  const isDuplicate = contacts.some(function (contact) {
    return normalizePhone(contact.phone) === normalizedPhone;
  });

  if (isDuplicate) {
    showMessage(
      "This phone number already exists in your contacts.",
      "error"
    );

    contactPhone.classList.add("input-error");
    contactPhone.focus();
    return;
  }

  // Create a new contact object
  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone
  };

  // Add contact to the array
  contacts.push(newContact);

  // Clear search so the new contact is visible
  searchInput.value = "";

  // Update the contact list
  renderContacts();

  // Reset the form
  contactForm.reset();
  clearInputErrors();

  // Show success message
  showMessage(
    `${name} has been added successfully.`,
    "success"
  );

  contactName.focus();
}

// 10. Delete a contact
function deleteContact(contactId) {
  const deletedContact = contacts.find(function (contact) {
    return contact.id === contactId;
  });

  contacts = contacts.filter(function (contact) {
    return contact.id !== contactId;
  });

  // Update the list while keeping the current search
  searchContacts();

  if (deletedContact) {
    showMessage(
      `${deletedContact.name} has been deleted.`,
      "success"
    );
  }
}

// 11. Search contacts by name
function searchContacts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredContacts = contacts.filter(function (contact) {
    return contact.name.toLowerCase().includes(searchTerm);
  });

  renderContacts(filteredContacts);
}

// 12. Clear input error styling when typing
contactName.addEventListener("input", function () {
  contactName.classList.remove("input-error");
});

contactPhone.addEventListener("input", function () {
  contactPhone.classList.remove("input-error");
});

// 13. Listen for form submission
contactForm.addEventListener("submit", addContact);

// 14. Listen for search input
searchInput.addEventListener("input", searchContacts);

// 15. Initial rendering
renderContacts();