// Parameters, Arguments, and Default Parameters


// Parameters

// Parameters are variables defined in a function declaration
// or function expression.

function greet(name) {
    console.log(`Hello, ${name}`);
}

// "name" is a parameter.


// Arguments

// Arguments are the actual values passed when a function
// is called.

greet("Prachi");

// "Prachi" is an argument.


// Multiple Parameters and Arguments

function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

add(2, 4);


// Missing Arguments

// If an argument is not provided, the corresponding parameter
// receives the value undefined.

function sum(firstValue, secondValue) {
    console.log(firstValue);
    console.log(secondValue);
    console.log(firstValue + secondValue);
}

sum();

// undefined
// undefined
// NaN


// Default Parameters

// A default parameter provides a value when an argument is
// not provided or is explicitly passed as undefined.

function subtract(firstNumber = 1, secondNumber = 1) {
    return firstNumber - secondNumber;
}

console.log(subtract()); // 0

console.log(subtract(10)); // 9

console.log(subtract(10, 4)); // 6