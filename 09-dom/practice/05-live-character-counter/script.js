const textInput = document.querySelector("#textInput");
const countDisplay = document.querySelector("#count");
const progressBar = document.querySelector("#progressBar");
const progressTrack = document.querySelector("#progressTrack");
const counterCard = document.querySelector("#counterCard");
const limitText = document.querySelector("#limitText");

const maxCharacters = textInput.maxLength;
const warningThreshold = Math.ceil(maxCharacters * 0.8);

progressTrack.setAttribute("aria-valuemax", maxCharacters);
limitText.textContent = `${maxCharacters} characters max`;

function updateCharacterCounter() {
    const currentLength = textInput.value.length;
    const percentage = (currentLength / maxCharacters) * 100;

    countDisplay.textContent = currentLength;
    progressBar.style.width = `${percentage}%`;
    progressTrack.setAttribute("aria-valuenow", currentLength);

    counterCard.classList.remove("near-limit", "limit-reached");

    if (currentLength >= maxCharacters) {
        counterCard.classList.add("limit-reached");
    } else if (currentLength >= warningThreshold) {
        counterCard.classList.add("near-limit");
    }
}

textInput.addEventListener("input", updateCharacterCounter);