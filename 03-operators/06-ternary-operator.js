// Ternary Operator

// The ternary operator is also called
// the conditional operator.

// Syntax:
//
// condition ? expressionIfTrue : expressionIfFalse


// Basic Example

const age = 22;

const message = age >= 18
    ? "Adult"
    : "Minor";

console.log(message); // "Adult"


// Another Example

const temperature = 35;

const weather = temperature >= 30
    ? "Hot"
    : "Pleasant";

console.log(weather); // "Hot"


// Ternary with a Boolean Result

const number = 10;

const isEven = number % 2 === 0
    ? true
    : false;

console.log(isEven); // true