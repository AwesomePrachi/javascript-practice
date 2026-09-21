// typeof and JavaScript Quirks

// typeof

console.log(typeof "Prachi"); // "string"

console.log(typeof 22); // "number"

console.log(typeof true); // "boolean"

console.log(typeof undefined); // "undefined"

console.log(typeof 22n); // "bigint"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof {}); // "object"

console.log(typeof []); // "object"

console.log(typeof function () {}); // "function"


// typeof null

console.log(typeof null); // "object"

// This is a historical behavior of JavaScript.
// null is a primitive value, even though typeof null
// returns "object".

console.log(null === null); // true


// typeof NaN

console.log(typeof NaN); // "number"

// NaN means "Not-a-Number", but it is still a special
// value within the Number type.


// NaN is not equal to itself

console.log(NaN === NaN); // false

console.log(Number.isNaN(NaN)); // true

// Use Number.isNaN() when you need to check whether
// a value is actually NaN.


// Floating-Point Precision

console.log(0.1 + 0.4); // 0.5

console.log(0.1 + 0.2); // 0.30000000000000004

// JavaScript Number values use floating-point representation,
// which can cause precision issues in calculations.


// Number.MAX_SAFE_INTEGER

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(
    Number.MAX_SAFE_INTEGER + 1 ===
    Number.MAX_SAFE_INTEGER + 2
); // true

// Integers beyond Number.MAX_SAFE_INTEGER cannot always
// be represented safely as exact integers.


/*
For very large integers, BigInt can be used:

const bigNumber = 9007199254740993n;

console.log(bigNumber); // 9007199254740993n
*/