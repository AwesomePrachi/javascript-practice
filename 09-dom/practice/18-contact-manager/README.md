# Contact Manager

A simple and interactive Contact Manager application built using HTML, CSS, and Vanilla JavaScript.

This project allows users to add, view, search, and delete contacts through a clean and responsive user interface. It focuses on strengthening JavaScript fundamentals through practical DOM manipulation and event handling.

## Features

- **Add Contacts:** Add new contacts using name and phone number inputs.
- **Display Contacts:** View all saved contacts in a dynamically generated list.
- **Search Contacts:** Search contacts by name with case-insensitive matching.
- **Delete Contacts:** Remove individual contacts from the list.
- **Phone Validation:** Validate phone number format and digit count.
- **Duplicate Prevention:** Prevent adding contacts with an existing phone number.
- **Contact Statistics:** Display the total number of contacts and update the count automatically.
- **Empty States:** Show appropriate messages when no contacts exist or no search results match.
- **Responsive Design:** Adapt the interface to different screen sizes.
- **User Feedback:** Display success and validation messages without interrupting the user.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- DOM Manipulation

## Concepts Practiced

- JavaScript arrays and objects
- DOM selection using `querySelector()`
- Event handling using `addEventListener()`
- Form submission and `preventDefault()`
- Input handling and validation
- String methods: `trim()`, `toLowerCase()` and `includes()`
- Array methods: `push()`, `filter()`, `some()` and `forEach()`
- Dynamic element creation using `createElement()`
- DOM updates using `textContent`, `append()` and `replaceChildren()`
- Template literals
- Regular expressions
- Conditional rendering
- Functions and code organization

## Project Structure

```text
18-contact-manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/AwesomePrachi/javascript-practice.git
   ```

2. Open the project folder:

   ```text
   09-dom/practice/18-contact-manager/
   ```

3. Open `index.html` in your browser.

   Alternatively, use the Live Server extension in Visual Studio Code.

## How It Works

1. The application starts with three sample contacts.
2. Users enter a name and phone number in the contact form.
3. JavaScript validates the inputs and checks for duplicate phone numbers.
4. Valid contacts are added to an array of objects.
5. The `renderContacts()` function dynamically displays the contact list.
6. The search input filters contacts by name.
7. The delete button removes the selected contact using its unique ID.
8. The contact count and displayed list update automatically.

## Important Note

This project stores contacts in a JavaScript array during the current page session.

Contacts are not saved permanently, so refreshing the page restores the initial sample contacts.

## Learning Objective

The main objective of this project is to apply JavaScript fundamentals to a practical application and improve problem-solving skills through arrays, objects, functions, DOM manipulation, form handling, and event-driven programming.

Built as part of my JavaScript DOM practice journey.