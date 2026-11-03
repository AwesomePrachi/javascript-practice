# Multiple-Choice Quiz

An interactive multiple-choice quiz application built with HTML, CSS, and vanilla JavaScript. Users can answer questions, receive immediate feedback, track their score, and view their final results.

## Features

- Display multiple-choice questions with four answer options
- Highlight correct and incorrect answers
- Prevent multiple answer selections for the same question
- Display explanations after each answer
- Track the current score
- Show quiz completion progress
- Display final score and percentage
- Provide performance-based result messages
- Restart the quiz and play again
- Responsive dark-themed interface
- Keyboard focus management for quiz navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Concepts Practiced

- Arrays of objects
- DOM selection using `querySelector()`
- Dynamic DOM creation using `createElement()`
- Array iteration using `forEach()`
- Event listeners and click events
- Conditional statements
- State management using variables
- Updating content with `textContent`
- CSS class manipulation using `classList`
- Dataset attributes
- Score calculation and percentage
- Progress indicators
- Functions and code organization
- Accessibility basics

## Project Structure

```text
16-multiple-choice-quiz/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open the `16-multiple-choice-quiz` folder.
3. Open `index.html` in a modern web browser.
4. Select an answer for each question.
5. Review the feedback and explanation.
6. Complete the quiz to view your final score.
7. Select **Play Again** to restart the quiz.

No installation or build tools are required.

## Quiz Rules

- Each question has four answer options.
- Only one answer can be selected per question.
- The correct answer is highlighted after selection.
- The score increases only for correct answers.
- The next question becomes available after an answer is selected.
- The final screen displays the score and percentage.

## Limitations

- Questions are predefined in the JavaScript file.
- The quiz does not use a backend or database.
- Quiz scores are not saved after refreshing the page.
- Questions appear in a fixed order.
- The current version contains five questions.

## Future Improvements

- Randomize question order
- Add different quiz categories
- Add a countdown timer
- Save quiz scores using `localStorage`
- Add difficulty levels
- Allow users to create custom quizzes

## Learning Goal

Practise DOM manipulation, arrays of objects, event handling, conditional logic, state tracking, and dynamic UI updates using vanilla JavaScript.