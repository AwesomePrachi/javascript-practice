// 1. Select HTML Elements

const themeToggle = document.querySelector("#themeToggle");

const previewTitle = document.querySelector("#previewTitle");
const previewText = document.querySelector("#previewText");
const previewIcon = document.querySelector("#previewIcon");

const toggleCircle = document.querySelector("#toggleCircle");

const statusText = document.querySelector("#statusText");
const memoryText = document.querySelector("#memoryText");


// 2. Define the localStorage Key

const STORAGE_KEY = "themePreference";


// 3. Maintain the Current Theme

let currentTheme = "dark";


// 4. Get the Saved Theme from localStorage

function getSavedTheme() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        // Check whether a saved preference exists
        if (savedData === null) {
            return null;
        }

        // Convert the JSON string into a JavaScript object
        const parsedData = JSON.parse(savedData);

        // Validate the saved theme
        if (
            parsedData &&
            (parsedData.theme === "dark" ||
             parsedData.theme === "light")
        ) {
            return parsedData.theme;
        }

        return null;

    } catch (error) {
        console.error("Could not read saved theme:", error);

        return null;
    }
}


// 5. Apply the Selected Theme

function applyTheme(theme) {
    // Update the current theme
    currentTheme = theme;

    // Change the theme attribute on the HTML element
    document.documentElement.setAttribute("data-theme", theme);

    const isDark = theme === "dark";

    // Update the toggle switch accessibility state
    themeToggle.setAttribute("aria-checked", isDark);

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Dark mode" : "Light mode"
    );

    // Update the theme preview
    previewTitle.textContent =
        isDark ? "Dark Mode" : "Light Mode";

    previewText.textContent = isDark
        ? "Easy on the eyes. Focus on what matters."
        : "Bright, clean, and comfortable.";

    // Update the theme icons
    previewIcon.textContent = isDark ? "☾" : "☀";

    toggleCircle.textContent = isDark ? "☾" : "☀";

    // Update the active theme status
    statusText.textContent =
        isDark ? "Dark Mode" : "Light Mode";
}


// 6. Save the Selected Theme

function saveTheme(theme) {
    try {
        // Create an object to store the preference
        const themeData = {
            theme: theme
        };

        // Convert the object into a JSON string
        const jsonData = JSON.stringify(themeData);

        // Save the JSON string in localStorage
        localStorage.setItem(STORAGE_KEY, jsonData);

        memoryText.textContent =
            `Your ${theme} theme preference has been saved successfully.`;

    } catch (error) {
        console.error("Could not save theme:", error);

        memoryText.textContent =
            "Theme changed, but browser storage is unavailable.";
    }
}


// 7. Handle Theme Toggle Click

themeToggle.addEventListener("click", function () {

    // Determine the opposite theme
    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    // Apply the new theme
    applyTheme(newTheme);

    // Save the new preference
    saveTheme(newTheme);

});


// 8. Restore the Saved Theme When the Page Loads

const savedTheme = getSavedTheme();

// Use dark mode if no valid preference exists
const initialTheme = savedTheme || "dark";

// Apply the initial theme
applyTheme(initialTheme);


// 9. Display the Appropriate Memory Message

if (savedTheme) {
    memoryText.textContent =
        `Your saved ${savedTheme} theme preference has been restored.`;
}