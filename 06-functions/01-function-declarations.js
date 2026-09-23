// Function Declarations

// A function declaration defines a reusable block of code.
// The function can be called whenever it is needed.


// Basic Function Declaration

function greet() {
    console.log("Hello");
}

greet();


// Function with Multiple Statements

function welcome() {
    console.log("Welcome to JavaScript");
    console.log("Keep learning and practicing.");
}

welcome();


// Function Declaration with a Parameter

function greetUser(name) {
    console.log(`Hello, ${name}`);
}

greetUser("Prachi");
greetUser("Rohan");


// Function Declaration with Multiple Parameters

function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

addNumbers(2, 4);
addNumbers(10, 20);