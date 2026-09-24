// Array Basics


// Creating an Array

// Array literals are the most common way to create arrays.

const marks = [41, 52, 93, 64, 75];

console.log(marks);


// Creating an Empty Array

const emptyArray = [];

console.log(emptyArray);


// Creating an Array with Array Constructor

// The Array constructor can also be used to create an array.

const anotherArray = new Array();

console.log(anotherArray);


// Accessing Array Elements

// Array indexes start from 0.

console.log(marks[0]); // 41

console.log(marks[3]); // 64

console.log(marks[4]); // 75


// Accessing an Out-of-Range Index

console.log(marks[54]); // undefined


// Modifying an Array Element

const scores = [23, 45, 67, 89, 43, 56];

scores[2] = 42;

console.log(scores); // [23, 45, 42, 89, 43, 56]


// Array Length

console.log(scores.length); // 6


// Accessing the Last Element

console.log(scores[scores.length - 1]); // 56