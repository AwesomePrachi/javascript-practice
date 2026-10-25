const stars = document.querySelectorAll(".star");
const ratingMessage = document.querySelector("#ratingMessage");
const ratingHint = document.querySelector("#ratingHint");

let selectedRating = 0;

stars.forEach(function (star) {
    star.addEventListener("click", function () {
        // Get and store the selected rating.
        selectedRating = Number(star.dataset.rating);

        // Update the appearance of all stars.
        stars.forEach(function (currentStar) {
            const starRating = Number(currentStar.dataset.rating);
            const isActive = starRating <= selectedRating;

            currentStar.classList.toggle("active", isActive);

            // Restart the animation only on the selected star.
            currentStar.classList.remove("just-selected");

            if (starRating === selectedRating) {
                void currentStar.offsetWidth;
                currentStar.classList.add("just-selected");
            }
        });

        // Display the selected rating.
        ratingMessage.textContent =
            `You rated ${selectedRating} out of 5 stars.`;

        // Display feedback based on the rating.
        ratingHint.textContent =
            selectedRating === 5
                ? "Amazing! Thanks for the perfect rating."
                : "Thanks for sharing your feedback!";
    });
});