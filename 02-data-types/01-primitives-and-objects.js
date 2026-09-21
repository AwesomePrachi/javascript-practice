// JavaScript Data Types

// JavaScript has 8 data types:
// 7 primitive types + Object

// Primitive types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Object is the non-primitive data type.


// Primitive Values

// Primitive values are immutable.
// When a primitive value is copied,
// a separate value is created.

let firstName = "Prachi";

let age = 22;

let isDeveloper = true;

let score;

let selectedUser = null;

let largeNumber = 9007199254740993n;

let uniqueId = Symbol("id");

console.log(firstName);
console.log(age);
console.log(isDeveloper);
console.log(score);
console.log(selectedUser);
console.log(largeNumber);
console.log(uniqueId);


// Primitive Values Are Copied by Value

let number1 = 10;

let number2 = number1;

number2 = 20;

console.log(number1); // 10
console.log(number2); // 20

// Changing number2 does not affect number1.


// Objects

// Objects are mutable.
// When an object is assigned to another variable,
// both variables refer to the same object.

let user1 = {
    name: "Prachi",
    age: 22
};

let user2 = user1;

user2.name = "Patel";

console.log(user1.name); // Patel
console.log(user2.name); // Patel

// user1 and user2 refer to the same object.


// Arrays and Functions

// Arrays are objects in JavaScript.

let skills = ["HTML", "CSS", "JavaScript"];

function greet() {
    console.log("Hello");
}

console.log(typeof skills); // "object"
console.log(typeof greet); // "function"

// Functions are objects with callable behavior.