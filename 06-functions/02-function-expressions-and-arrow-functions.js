// Function Expressions and Arrow Functions


// Function Expression

// A function expression creates a function and assigns it
// to a variable.

const greet = function () {
    console.log("Hello from a function expression.");
};

greet();


// Function Expression with Parameters

const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

console.log(add(10, 20)); // 30


// Arrow Function

// Arrow functions provide a shorter syntax for functions.

const sayHello = () => {
    console.log("Hello from an arrow function.");
};

sayHello();


// Arrow Function with a Parameter

const greetUser = (name) => {
    console.log(`Hello, ${name}`);
};

greetUser("Prachi");


// Arrow Function with Multiple Parameters

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

console.log(multiply(4, 5)); // 20


// Implicit Return

// When an arrow function contains a single expression,
// the expression can be returned implicitly.

const square = (number) => number * number;

console.log(square(5)); // 25


// Parentheses around a single parameter are optional.

const double = number => number * 2;

console.log(double(10)); // 20