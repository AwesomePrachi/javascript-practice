"use strict";

// Select HTML elements
const taskList = document.querySelector("#taskList");
const checkboxes = taskList.querySelectorAll(".task-checkbox");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const progressTrack = document.querySelector("#progressTrack");

// Update the completion state of a task
function updateTaskState(checkbox) {
    const taskItem = checkbox.closest(".task-item");
    const taskText = taskItem.querySelector(".task-text");

    taskText.classList.toggle("completed", checkbox.checked);
}

// Update the task completion progress
function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedCount = taskList.querySelectorAll(
        ".task-checkbox:checked"
    ).length;

    const percentage = totalTasks === 0
        ? 0
        : (completedCount / totalTasks) * 100;

    // Update the progress text and visual bar
    progressText.textContent =
        `${completedCount} of ${totalTasks} completed`;

    progressBar.style.width = `${percentage}%`;

    // Keep progress accessibility values synchronized
    progressTrack.setAttribute("aria-valuemax", totalTasks);
    progressTrack.setAttribute("aria-valuenow", completedCount);
}

// Handle checkbox changes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        updateTaskState(checkbox);
        updateProgress();
    });

    // Synchronize the initial task appearance
    updateTaskState(checkbox);
});

// Initialize the progress display
updateProgress();