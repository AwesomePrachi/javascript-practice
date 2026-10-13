let count = 0;

const countDisplay = document.querySelector("#count");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");

const updateCountDisplay = () => {
    countDisplay.textContent = count;
};

increaseButton.addEventListener("click", () => {
    count++;
    updateCountDisplay();
});

decreaseButton.addEventListener("click", () => {
    count--;
    updateCountDisplay();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCountDisplay();
});
