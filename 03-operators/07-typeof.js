// typeof Operator

// The typeof operator returns a string
// describing the type of a value.


// Primitive Values

console.log(typeof "Prachi"); // "string"

console.log(typeof 22); // "number"

console.log(typeof true); // "boolean"

console.log(typeof undefined); // "undefined"

console.log(typeof 22n); // "bigint"

console.log(typeof Symbol("id")); // "symbol"


// Objects and Functions

console.log(typeof {}); // "object"

console.log(typeof []); // "object"

console.log(typeof function () {}); // "function"


// typeof null

console.log(typeof null); // "object"

// This is a historical behavior of JavaScript.
// null is a primitive value, even though
// typeof null returns "object".


// typeof NaN

console.log(typeof NaN); // "number"

// NaN is a special value within the Number type.