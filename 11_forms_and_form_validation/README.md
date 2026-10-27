# Forms and Form Validation

A beginner-friendly practice chapter for learning HTML forms and JavaScript-based validation.

## Features

- HTML form controls with labels and meaningful names
- Custom name validation using `trim()` and string length
- Email-format checking with a regular expression
- Minimum password-length validation
- Field-specific validation messages
- Dynamic feedback when users correct invalid fields
- Form submit handling with `addEventListener()`
- Prevention of default submission using `preventDefault()`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Concepts Practiced

- DOM selection with `querySelector()`
- Reading input values using `.value`
- Removing surrounding whitespace using `.trim()`
- Form events and event handlers
- Conditional statements and Boolean state
- Regular expressions and `.test()`
- Updating text with `textContent`
- Showing and hiding elements
- Updating CSS classes with `classList`

## How to Run

1. Open the `11_forms_and_form_validation` folder.
2. Open `index.html` in a web browser.
3. Test empty fields, short names, invalid email formats, and short passwords.

No dependencies or build tools are required.

## Limitations

- The form does not send data to a backend or database.
- The email regex is a simplified format check.
- Password validation checks length only.
- Client-side validation can be bypassed and must not replace server-side validation.

## Learning Goal

Practice building HTML forms and validating user input using vanilla JavaScript, DOM manipulation, events, conditionals, and regular expressions.