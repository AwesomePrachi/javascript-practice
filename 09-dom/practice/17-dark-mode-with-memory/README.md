# 17. Dark Mode with Memory

An interactive theme-switching application built using HTML, CSS, and JavaScript.

The application allows users to switch between dark and light themes. It saves the selected theme preference in the browser's localStorage and restores it when the page is revisited.

## Features

- Switch between dark and light themes.
- Save the selected theme using localStorage.
- Restore the saved theme when the page loads.
- Display the currently active theme.
- Show a live theme preview.
- Handle unavailable browser storage gracefully.
- Responsive layout for different screen sizes.
- Keyboard-accessible theme toggle.
- Reduced-motion support.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser localStorage API

## Concepts Practiced

- DOM selection and manipulation
- `querySelector()`
- `addEventListener()`
- `textContent`
- `setAttribute()`
- CSS custom properties
- `data-*` attributes
- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.stringify()`
- `JSON.parse()`
- Conditional statements
- Functions
- Template literals
- `try...catch` error handling

## Project Structure

```text
17-dark-mode-with-memory/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Use the toggle button to switch between dark and light themes.
5. Refresh the page to verify that your selected preference is restored.

## How It Works

1. The application checks localStorage for a previously saved theme.
2. If a valid preference exists, it applies that theme.
3. Otherwise, dark mode is used as the default theme.
4. When the user changes the theme, JavaScript updates the `data-theme` attribute.
5. The selected theme is converted into JSON and saved in localStorage.
6. The saved preference is restored when the page is opened again.

## Browser Storage

The theme preference is stored locally in the browser using the key:

`themePreference`

Example stored value:

```json
{
  "theme": "light"
}
```

## Author

Built as part of my JavaScript DOM practice journey.