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

// 3. Display contacts
function renderContacts() {
  contactList.replaceChildren();

  totalContacts.textContent = contacts.length;

  contactCount.textContent =
    `${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"}`;

  contacts.forEach(function (contact) {
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

    contactItem.append(avatar, details);

    contactList.appendChild(contactItem);
  });
}

// 4. Add a new contact
function addContact(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get values from the input fields
  const name = contactName.value.trim();
  const phone = contactPhone.value.trim();

  // Check whether both fields contain values
  if (name === "" || phone === "") {
    return;
  }

  // Create a new contact object
  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone
  };

  // Add the new contact to the array
  contacts.push(newContact);

  // Update the contact list on the page
  renderContacts();

  // Clear the form fields
  contactForm.reset();

  // Return focus to the name input
  contactName.focus();
}

// 5. Listen for form submission
contactForm.addEventListener("submit", addContact);

// 6. Initial rendering
renderContacts();