"use strict";

// Store the gallery images
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
        thumbnailSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=70",
        alt: "Beautiful mountain landscape",
        thumbnailLabel: "Show mountain landscape",
        title: "Mountain Escape"
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
        thumbnailSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=70",
        alt: "Tropical beach with turquoise water",
        thumbnailLabel: "Show tropical beach",
        title: "Tropical Paradise"
    },
    {
        src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85",
        thumbnailSrc: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=300&q=70",
        alt: "Peaceful ocean sunset",
        thumbnailLabel: "Show ocean sunset",
        title: "Golden Sunset"
    },
    {
        src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85",
        thumbnailSrc: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=300&q=70",
        alt: "Waterfall surrounded by lush greenery",
        thumbnailLabel: "Show forest waterfall",
        title: "Hidden Waterfall"
    }
];

// Select the HTML elements
const mainImage = document.querySelector("#mainImage");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const imageCounter = document.querySelector("#imageCounter");
const imageTitle = document.querySelector("#imageTitle");
const thumbnails = document.querySelectorAll(".thumbnail");

// Track the currently displayed image
let currentIndex = 0;

// Display an image and update the gallery
function showImage(index) {
    currentIndex = index;

    const image = images[currentIndex];

    // Apply the transition effect
    mainImage.classList.add("changing");

    // Update the main image
    mainImage.src = image.src;
    mainImage.alt = image.alt;

    // Update the image details
    imageTitle.textContent = image.title;
    imageCounter.textContent =
        `${currentIndex + 1} / ${images.length}`;

    // Update the selected thumbnail
    thumbnails.forEach((thumbnail, i) => {
        const isActive = i === currentIndex;

        thumbnail.classList.toggle("active", isActive);
        thumbnail.setAttribute("aria-pressed", String(isActive));
    });
}

// Remove the dimming effect when the image loads
mainImage.addEventListener("load", () => {
    mainImage.classList.remove("changing");
});

// Handle a failed main image load
mainImage.addEventListener("error", () => {
    mainImage.classList.remove("changing");
});

// Display the next image
nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
});

// Display the previous image
prevButton.addEventListener("click", () => {
    const prevIndex =
        (currentIndex - 1 + images.length) % images.length;

    showImage(prevIndex);
});

// Display an image selected from the thumbnails
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        const index = Number(thumbnail.dataset.index);
        showImage(index);
    });
});

// Initialize the gallery from the image data
showImage(0);