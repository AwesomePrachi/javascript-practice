# Simple Expense Tracker

A responsive expense tracker built with HTML, CSS, and vanilla JavaScript. This project demonstrates DOM manipulation, arrays of objects, form validation, event handling, and dynamic calculations.

## Features

- Add expenses with a name and amount
- Display all recorded expenses
- Calculate total expenses dynamically
- Delete individual expenses
- Automatically update expense counts
- Format amounts in Indian Rupees (INR)
- Validate expense names and amounts
- Display field-specific error messages
- Show success and error feedback
- Display an empty state when no expenses exist
- Responsive dark-themed user interface
- Accessible form labels and delete buttons

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Concepts Practiced

- DOM selection using `querySelector()`
- Form submission events and `preventDefault()`
- Arrays and objects
- Array methods: `push()`, `filter()`, `forEach()`, and `reduce()`
- Dynamic DOM creation using `createElement()`
- Updating content with `textContent`
- Event listeners and conditional statements
- Input validation and number conversion
- Currency formatting with `Intl.NumberFormat()`
- Working with currency in integer paise
- Responsive CSS and accessibility basics

## Project Structure

```text
15-expense-tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open the `15-expense-tracker` folder.
3. Open `index.html` in a modern browser.
4. Enter an expense name and amount.
5. Click **Add Expense** to add it to the list.
6. Use the delete button to remove an expense and recalculate the total.

No installation or build tools are required.

## Validation Rules

- Expense name cannot be empty.
- Amount must be a valid number greater than zero.
- Amount cannot exceed ₹1,000,000,000.
- Amounts can contain up to two decimal places.

## Limitations

- Expenses are stored in an in-memory JavaScript array.
- Refreshing the page clears the expenses.
- The application does not use a backend or database.
- This is a learning project, not a complete financial management application.

## Future Improvements

- Save expenses using `localStorage`
- Add expense categories
- Record expense dates
- Filter expenses by category
- Add monthly spending summaries

## Learning Goal

Practise arrays of objects, form validation, DOM manipulation, event handling, array methods, and dynamic calculations using vanilla JavaScript.