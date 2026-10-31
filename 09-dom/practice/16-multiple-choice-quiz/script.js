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

// ---------- 3. Track Current Question ----------

let currentQuestionIndex = 0;

// ---------- 4. Display the Current Question ----------

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question number.
    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Display the question.
    questionText.textContent = currentQuestion.question;

    // Remove previously displayed answer options.
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

        // Add both elements to the button.
        button.append(letter, answerText);

        // Disable answer selection until Push 3.
        button.disabled = true;

        // Add the button to the answers container.
        answersContainer.appendChild(button);
    });
}

// ---------- 5. Start the Quiz ----------

showQuestion();