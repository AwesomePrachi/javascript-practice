// Type Coercion

// Type coercion is the conversion of a value from one type
// to another, either implicitly or explicitly.

// JavaScript can perform implicit type coercion.


// String Coercion with +

console.log("5" + 1); // "51"

// When + involves a string, JavaScript performs
// string concatenation.

console.log(5 + "1"); // "51"


// Numeric Coercion

console.log("5" - 1); // 4

// The - operator performs numeric coercion here,
// converting the string "5" into the number 5.

console.log("10" * 2); // 20

console.log("10" / 2); // 5


// Boolean and Number Coercion

console.log(true + false); // 1

console.log(null + 1); // 1

console.log(Number("123")); // 123


// Loose Equality (==)

console.log(5 == "5"); // true

// == can perform type coercion before comparison.


// Strict Equality (===)

console.log(5 === "5"); // false

// === compares both value and type without type coercion.


// More Examples

console.log(0 == false); // true

console.log(0 === false); // false

console.log(null == undefined); // true

console.log(null === undefined); // false