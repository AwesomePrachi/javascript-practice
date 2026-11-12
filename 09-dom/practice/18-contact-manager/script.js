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

const contactList = document.querySelector("#contactList");

const totalContacts = document.querySelector("#totalContacts");
const contactCount = document.querySelector("#contactCount");


// 3. Display contacts

function renderContacts() {
    // Clear previously displayed contacts.
    contactList.replaceChildren();

    // Update total contact count.
    totalContacts.textContent = contacts.length;

    contactCount.textContent =
        `${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"}`;

    // Create and display each contact.
    contacts.forEach(function (contact) {

        // Create contact card.
        const contactItem = document.createElement("article");
        contactItem.className = "contact-item";

        // Create avatar.
        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = contact.name.charAt(0);
        avatar.setAttribute("aria-hidden", "true");

        // Create contact details container.
        const details = document.createElement("div");
        details.className = "contact-details";

        // Create contact name.
        const name = document.createElement("p");
        name.className = "contact-name";
        name.textContent = contact.name;

        // Create contact phone number.
        const phone = document.createElement("p");
        phone.className = "contact-phone";
        phone.textContent = contact.phone;

        // Add name and phone to details.
        details.append(name, phone);

        // Add elements to contact card.
        contactItem.append(avatar, details);

        // Add contact card to contact list.
        contactList.appendChild(contactItem);
    });
}


// 4. Initial rendering

renderContacts();