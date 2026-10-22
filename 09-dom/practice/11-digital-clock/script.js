"use strict";

// Select the HTML elements
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const dateDisplay = document.querySelector("#dateDisplay");

// Update the clock with the current local time
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Format the time with two digits
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Display the time
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // Display the current date
    dateDisplay.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// Display the time immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);