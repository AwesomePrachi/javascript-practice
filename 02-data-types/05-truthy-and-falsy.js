// Truthy and Falsy Values

// JavaScript converts values to Boolean when
// they are used in a Boolean context.

// A value that converts to false is called falsy.
// All other values are truthy.


// Falsy Values

console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(-0)); // false

console.log(Boolean(0n)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean(NaN)); // false


// Truthy Values

console.log(Boolean("Prachi")); // true

console.log(Boolean(22)); // true

console.log(Boolean(-1)); // true

console.log(Boolean("0")); // true

console.log(Boolean([])); // true

console.log(Boolean({})); // true

console.log(Boolean(12n)); // true


// Double NOT Operator (!!)

// !! converts a value to its Boolean equivalent.

console.log(!!0); // false

console.log(!!null); // false

console.log(!!""); // false

console.log(!!undefined); // false

console.log(!!"Prachi"); // true

console.log(!!42); // true


// Truthy / Falsy in a Condition

const username = "Prachi";

if (username) {
    console.log("Username exists.");
}

const score = 0;

if (score) {
    console.log("Score is truthy.");
} else {
    console.log("Score is falsy.");
}