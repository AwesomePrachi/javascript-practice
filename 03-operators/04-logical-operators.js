// Logical Operators

// Logical operators are commonly used to combine
// or negate conditions.

// &&
// ||
// !


// Logical AND (&&)

// Returns true when both operands are truthy.

console.log(true && true); // true

console.log(true && false); // false

console.log(false && true); // false

console.log(false && false); // false


// Logical OR (||)

// Returns true when at least one operand is truthy.

console.log(true || true); // true

console.log(true || false); // true

console.log(false || true); // true

console.log(false || false); // false


// Logical NOT (!)

// Converts the operand to a Boolean value
// and returns the opposite Boolean value.

console.log(!true); // false

console.log(!false); // true


// Double NOT (!!)

// !! can be used to convert a value to its Boolean equivalent.

console.log(!!12); // true

console.log(!!0); // false

console.log(!!"Prachi"); // true

console.log(!!""); // false

console.log(!!null); // false