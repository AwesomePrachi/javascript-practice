// Attribute Manipulation


// Direct Property Access

const googleLink = document.querySelector("#google-link");

console.log(googleLink.href);

googleLink.href = "https://www.google.com";


// setAttribute()

googleLink.setAttribute(
    "href",
    "https://www.google.com"
);


// getAttribute()

const profileLink = document.querySelector("#profile-link");

console.log(profileLink.getAttribute("href"));


// removeAttribute()

profileLink.removeAttribute("href");


// Image Attribute

const image = document.querySelector("#image");

image.setAttribute(
    "src",
    "https://placehold.co/400x200"
);

image.setAttribute(
    "alt",
    "Updated placeholder image"
);

console.log(image.getAttribute("src"));


// Remove an Attribute

const disabledButton = document.querySelector("#disabled-button");

disabledButton.removeAttribute("disabled");