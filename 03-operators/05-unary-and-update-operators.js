// Unary and Update Operators

// Unary operators work with one operand.

// Examples:
// +
// -
// !
// typeof

// Update operators:
// ++
// --


// Unary Plus (+)

console.log(+"5"); // 5

console.log(+true); // 1

console.log(+false); // 0

console.log(+"Prachi"); // NaN

// Unary + attempts to convert its operand to a Number.


// Unary Negation (-)

console.log(-5); // -5

console.log(-"5"); // -5


// Logical NOT (!)

console.log(!true); // false

console.log(!false); // true

console.log(!0); // true

console.log(!12); // false


// Prefix Increment (++variable)

let count = 12;

console.log(++count); // 13

console.log(count); // 13

// Prefix increment increases the value first
// and then returns the updated value.


// Postfix Increment (variable++)

let score = 12;

console.log(score++); // 12

console.log(score); // 13

// Postfix increment returns the current value first
// and then increases the variable.


// Prefix Decrement (--variable)

let points = 12;

console.log(--points); // 11

console.log(points); // 11

// Prefix decrement decreases the value first
// and then returns the updated value.


// Postfix Decrement (variable--)

let lives = 12;

console.log(lives--); // 12

console.log(lives); // 11

// Postfix decrement returns the current value first
// and then decreases the variable.


// Update Operator Practice

let x = 3;

let y = x++;

console.log(x); // 4

console.log(y); // 3


// Prefix and Postfix in One Expression

let number = 5;

let result = number++ + ++number;

console.log(result); // 12

console.log(number); // 7

// This example demonstrates the difference between
// postfix and prefix increment.