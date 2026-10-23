"use strict";

// Select all FAQ question buttons
const questions = document.querySelectorAll(".faq-question");

// Add a click listener to each question
questions.forEach((question) => {
    question.addEventListener("click", () => {
        // Find the FAQ item containing this question
        const faqItem = question.closest(".faq-item");

        // Find the answer controlled by this question
        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        // Toggle the FAQ item's active state
        faqItem.classList.toggle("active");

        // Determine whether the answer should be open
        const isOpen = faqItem.classList.contains("active");

        // Update answer visibility
        answer.hidden = !isOpen;

        // Synchronize the accessibility state
        question.setAttribute("aria-expanded", String(isOpen));
    });
});