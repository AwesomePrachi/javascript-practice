"use strict";

// Select HTML elements
const searchInput = document.querySelector("#searchInput");
const fruitItems = document.querySelectorAll("#fruitList li");
const resultCount = document.querySelector("#resultCount");
const emptyMessage = document.querySelector("#emptyMessage");

// Filter fruits as the user types
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    // Check each fruit
    fruitItems.forEach((item) => {
        const fruitName = item
            .querySelector(".fruit-name")
            .textContent
            .trim()
            .toLowerCase();

        const matches = fruitName.includes(searchText);

        // Show matching fruits and hide nonmatching fruits
        item.classList.toggle("is-hidden", !matches);

        if (matches) {
            visibleCount++;
        }
    });

    // Update the number of matching fruits
    resultCount.textContent =
        `${visibleCount} ${visibleCount === 1 ? "fruit" : "fruits"}`;

    // Show the empty state when no fruits match
    emptyMessage.hidden = visibleCount !== 0;
});