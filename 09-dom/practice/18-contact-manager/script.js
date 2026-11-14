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

// 3. Display contacts
function renderContacts(filteredContacts = contacts) {
  // Clear the previous contact list
  contactList.replaceChildren();

  // Update the total contact count
  totalContacts.textContent = contacts.length;

  contactCount.textContent =
    `${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"}`;

  // Show an empty state when no contacts exist
  if (contacts.length === 0) {
    showEmptyState(
      "No contacts yet",
      "Add your first contact to get started.",
      "♧"
    );
    return;
  }

  // Show an empty state when the search has no matches
  if (filteredContacts.length === 0) {
    showEmptyState(
      "No contacts found",
      "Try searching with a different name.",
      "⌕"
    );
    return;
  }

  // Create and display each contact
  filteredContacts.forEach(function (contact) {
    const contactItem = document.createElement("article");
    contactItem.className = "contact-item";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = contact.name.charAt(0);
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

// 4. Display empty states
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

// 5. Add a new contact
function addContact(event) {
  event.preventDefault();

  const name = contactName.value.trim();
  const phone = contactPhone.value.trim();

  if (name === "" || phone === "") {
    return;
  }

  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone
  };

  contacts.push(newContact);

  // Clear the search so the newly added contact is visible
  searchInput.value = "";

  renderContacts();

  contactForm.reset();
  contactName.focus();
}

// 6. Delete a contact
function deleteContact(contactId) {
  contacts = contacts.filter(function (contact) {
    return contact.id !== contactId;
  });

  // Re-render using the current search value
  searchContacts();
}

// 7. Search contacts by name
function searchContacts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredContacts = contacts.filter(function (contact) {
    return contact.name.toLowerCase().includes(searchTerm);
  });

  renderContacts(filteredContacts);
}

// 8. Listen for form submission
contactForm.addEventListener("submit", addContact);

// 9. Listen for search input
searchInput.addEventListener("input", searchContacts);

// 10. Initial rendering
renderContacts();