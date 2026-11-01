"use strict";

// ---------- 1. Store Quiz Questions ----------

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Management Language"
        ],
        correctAnswer: 0,
        explanation:
            "HTML stands for HyperText Markup Language. It structures the content of web pages."
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: [
            "var",
            "let",
            "define",
            "variable"
        ],
        correctAnswer: 1,
        explanation:
            "let declares a variable that is limited to its block scope and can be reassigned."
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "document.querySelectorAll()",
            "document.getElementsByClassName()",
            "document.getElementById()",
            "document.createElement()"
        ],
        correctAnswer: 2,
        explanation:
            "getElementById() selects the element whose id matches the supplied string."
    },
    {
        question: "Which array method creates a new array by transforming elements?",
        options: [
            "forEach()",
            "push()",
            "find()",
            "map()"
        ],
        correctAnswer: 3,
        explanation:
            "map() calls a callback for each element and returns a new array containing the results."
    },
    {
        question: "Which event occurs when a user clicks a button?",
        options: [
            "change",
            "submit",
            "click",
            "load"
        ],
        correctAnswer: 2,
        explanation:
            "The click event fires when a user clicks or otherwise activates an element."
    }
];

// ---------- 2. Select HTML Elements ----------

const questionCounter = document.querySelector("#questionCounter");
const questionText = document.querySelector("#questionText");
const answersContainer = document.querySelector("#answersContainer");

const feedback = document.querySelector("#feedback");
const currentScoreElement = document.querySelector("#currentScore");
const nextButton = document.querySelector("#nextButton");

// ---------- 3. Track Quiz State ----------

let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;

// ---------- 4. Display the Current Question ----------

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display question number.
    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Display question.
    questionText.textContent = currentQuestion.question;

    // Reset answer selection.
    answerSelected = false;

    // Clear previous feedback.
    feedback.className = "feedback";
    feedback.replaceChildren();

    // Keep navigation disabled until Push 4.
    nextButton.disabled = true;

    // Remove previously displayed options.
    answersContainer.replaceChildren();

    // Create answer buttons dynamically.
    currentQuestion.options.forEach(function (option, index) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-button";

        // Create answer letter.
        const letter = document.createElement("span");

        letter.className = "answer-letter";
        letter.textContent = String.fromCharCode(65 + index);

        // Create answer text.
        const answerText = document.createElement("span");

        answerText.className = "answer-text";
        answerText.textContent = option;

        // Create answer status indicator.
        const status = document.createElement("span");

        status.className = "answer-status";
        status.setAttribute("aria-hidden", "true");

        // Add elements to the button.
        button.append(letter, answerText, status);

        // Store answer index in a data attribute.
        button.dataset.index = index;

        // Listen for answer selection.
        button.addEventListener("click", function () {
            checkAnswer(button);
        });

        // Add button to the answers container.
        answersContainer.appendChild(button);
    });

    // Display current score.
    currentScoreElement.textContent = score;
}

// ---------- 5. Check the Selected Answer ----------

function checkAnswer(selectedButton) {
    // Prevent selecting multiple answers.
    if (answerSelected) {
        return;
    }

    answerSelected = true;

    // Get selected answer index.
    const selectedIndex = Number(selectedButton.dataset.index);

    // Get current question.
    const currentQuestion = questions[currentQuestionIndex];

    // Check whether the answer is correct.
    const isCorrect =
        selectedIndex === currentQuestion.correctAnswer;

    // Get all answer buttons.
    const answerButtons =
        answersContainer.querySelectorAll(".answer-button");

    // Disable all buttons and highlight answers.
    answerButtons.forEach(function (button) {
        button.disabled = true;

        const index = Number(button.dataset.index);

        const status = button.querySelector(".answer-status");

        // Highlight the correct answer.
        if (index === currentQuestion.correctAnswer) {
            button.classList.add("correct");
            status.textContent = "✓";
        }

        // Highlight the selected incorrect answer.
        if (button === selectedButton && !isCorrect) {
            button.classList.add("incorrect");
            status.textContent = "✕";
        }
    });

    // Update score and show feedback.
    if (isCorrect) {
        score++;

        feedback.className = "feedback visible success";

        const heading = document.createElement("strong");
        heading.textContent = "✓ Correct answer!";

        const explanation = document.createElement("span");
        explanation.textContent = currentQuestion.explanation;

        feedback.append(heading, explanation);
    } else {
        feedback.className = "feedback visible error";

        const heading = document.createElement("strong");
        heading.textContent = "✕ Not quite!";

        const explanation = document.createElement("span");
        explanation.textContent = currentQuestion.explanation;

        feedback.append(heading, explanation);
    }

    // Update displayed score.
    currentScoreElement.textContent = score;
}

// ---------- 6. Start the Quiz ----------

showQuestion();