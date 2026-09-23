// Pure and Impure Functions


// Pure Function

// A pure function:
// 1. Returns the same output for the same inputs.
// 2. Does not cause observable side effects.

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(add(2, 3)); // 5

console.log(add(2, 3)); // 5


// Another Pure Function

function double(number) {
    return number * 2;
}

console.log(double(7)); // 14


// Pure Function with a String

function createGreeting(name) {
    return `Welcome, ${name}`;
}

console.log(createGreeting("Prachi")); // "Welcome, Prachi"


// Impure Function

// An impure function can produce observable side effects
// or depend on external state that can change.

let total = 0;

function addToTotal(value) {
    total += value;
}

addToTotal(10);

console.log(total); // 10

// The function changes the external variable "total".


// Another Impure Function

let count = 0;

function incrementCount() {
    count++;
}

incrementCount();

console.log(count); // 1


// Pure Alternative

// Instead of modifying external state, pass the current value
// into the function and return the new value.

function addToValue(currentTotal, value) {
    return currentTotal + value;
}

const newTotal = addToValue(100, 20);

console.log(newTotal); // 120