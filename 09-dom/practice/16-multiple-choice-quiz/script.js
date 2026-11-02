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

// Quiz screens.
const quizScreen = document.querySelector("#quizScreen");
const resultsScreen = document.querySelector("#resultsScreen");

// Progress elements.
const questionCounter = document.querySelector("#questionCounter");
const progressPercent = document.querySelector("#progressPercent");
const progressTrack = document.querySelector("#progressTrack");
const progressBar = document.querySelector("#progressBar");

// Question and answer elements.
const questionText = document.querySelector("#questionText");
const answersContainer = document.querySelector("#answersContainer");
const feedback = document.querySelector("#feedback");

// Quiz controls.
const currentScoreElement = document.querySelector("#currentScore");
const nextButton = document.querySelector("#nextButton");

// Result elements.
const resultIcon = document.querySelector("#resultIcon");
const resultTitle = document.querySelector("#resultTitle");
const resultDescription = document.querySelector("#resultDescription");
const resultPercentage = document.querySelector("#resultPercentage");
const resultFraction = document.querySelector("#resultFraction");
const resultProgressTrack = document.querySelector("#resultProgressTrack");
const resultBar = document.querySelector("#resultBar");
const restartButton = document.querySelector("#restartButton");

// ---------- 3. Track Quiz State ----------

let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;

// ---------- 4. Update Quiz Progress ----------

function updateProgress(answeredQuestions = currentQuestionIndex) {
    const percentage = Math.round(
        (answeredQuestions / questions.length) * 100
    );

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    progressPercent.textContent = `${percentage}%`;

    progressBar.style.width = `${percentage}%`;

    progressTrack.setAttribute(
        "aria-valuenow",
        answeredQuestions
    );

    progressTrack.setAttribute(
        "aria-valuetext",
        `${answeredQuestions} of ${questions.length} questions answered`
    );
}

// ---------- 5. Display the Current Question ----------

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question.
    questionText.textContent = currentQuestion.question;

    // Update progress information.
    updateProgress();

    // Reset answer selection.
    answerSelected = false;

    // Clear previous feedback.
    feedback.className = "feedback";
    feedback.replaceChildren();

    // Disable the next button until an answer is selected.
    nextButton.disabled = true;

    // Remove previous answer options.
    answersContainer.replaceChildren();

    // Update the next button label.
    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "See Results →"
            : "Next Question →";

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

        // Store the answer index.
        button.dataset.index = index;

        // Listen for answer selection.
        button.addEventListener("click", function () {
            checkAnswer(button);
        });

        // Add button to the answers container.
        answersContainer.appendChild(button);
    });

    // Update the current score.
    currentScoreElement.textContent = score;
}

// ---------- 6. Check the Selected Answer ----------

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

    // Check whether the selected answer is correct.
    const isCorrect =
        selectedIndex === currentQuestion.correctAnswer;

    // Get all answer buttons.
    const answerButtons =
        answersContainer.querySelectorAll(".answer-button");

    // Disable all options and highlight the answers.
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

    // Update score and display feedback.
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

    // Update the displayed score.
    currentScoreElement.textContent = score;

    // Update progress after answering.
    updateProgress(currentQuestionIndex + 1);

    // Enable navigation to the next question.
    nextButton.disabled = false;
}

// ---------- 7. Move to the Next Question ----------

nextButton.addEventListener("click", function () {
    // Do not continue without selecting an answer.
    if (!answerSelected) {
        return;
    }

    // Move to the next question.
    currentQuestionIndex++;

    // Check whether more questions are available.
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // All questions have been answered.
        showResults();
    }
});

// ---------- 8. Display Final Results ----------

function showResults() {
    // Switch from quiz screen to results screen.
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    // Calculate final percentage.
    const percentage = Math.round(
        (score / questions.length) * 100
    );

    // Display final score and percentage.
    resultPercentage.textContent = `${percentage}%`;

    resultFraction.textContent =
        `You scored ${score} out of ${questions.length}.`;

    // Update the result progress bar.
    resultProgressTrack.setAttribute(
        "aria-valuenow",
        percentage
    );

    resultProgressTrack.setAttribute(
        "aria-valuetext",
        `${percentage} percent`
    );

    // Display performance-based messages.
    if (percentage === 100) {
        resultIcon.textContent = "🏆";
        resultTitle.textContent = "Perfect Score!";

        resultDescription.textContent =
            "Outstanding! You answered every question correctly.";
    } else if (percentage >= 60) {
        resultIcon.textContent = "🎉";
        resultTitle.textContent = "Great Job!";

        resultDescription.textContent =
            "Nice work! Keep practicing to strengthen your skills.";
    } else {
        resultIcon.textContent = "💡";
        resultTitle.textContent = "Keep Learning!";

        resultDescription.textContent =
            "Every attempt helps you improve. Try again and beat your score.";
    }

    // Animate the final score bar.
    resultBar.style.width = "0%";

    requestAnimationFrame(function () {
        resultBar.style.width = `${percentage}%`;
    });
}

// ---------- 9. Restart the Quiz ----------

restartButton.addEventListener("click", function () {
    // Reset quiz state.
    currentQuestionIndex = 0;
    score = 0;
    answerSelected = false;

    // Reset the results progress bar.
    resultBar.style.width = "0%";

    // Switch back to the quiz screen.
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    // Display the first question again.
    showQuestion();
});

// ---------- 10. Start the Quiz ----------

showQuestion();