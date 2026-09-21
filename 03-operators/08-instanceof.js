// instanceof Operator

// The instanceof operator checks whether an object
// is an instance of a particular constructor or class.

// Syntax:
//
// object instanceof Constructor


// Array

const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills instanceof Array); // true

console.log(skills instanceof Object); // true


// Object

const user = {
    name: "Prachi"
};

console.log(user instanceof Object); // true

console.log(user instanceof Array); // false


// Function

function greet() {
    console.log("Hello");
}

console.log(greet instanceof Function); // true

console.log(greet instanceof Object); // true


// Date

const currentDate = new Date();

console.log(currentDate instanceof Date); // true

console.log(currentDate instanceof Object); // true