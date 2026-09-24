// Array Destructuring and Spread Syntax


// Array Destructuring

// Destructuring allows values from an array to be assigned
// to variables based on their positions.

const numbers = [1, 2, 4, 5, 6];

const [first, second] = numbers;

console.log(first); // 1
console.log(second); // 2


// Skipping Values

const [firstValue, secondValue, , fourthValue] = numbers;

console.log(firstValue); // 1
console.log(secondValue); // 2
console.log(fourthValue); // 5


// Destructuring More Values

const fullName = ["Prachi", "Patel"];

const [firstName, lastName] = fullName;

console.log(firstName); // Prachi
console.log(lastName); // Patel


// Spread Syntax

// Spread syntax expands the elements of an iterable
// such as an array.

const firstArray = [1, 2];
const secondArray = [3, 4];

const mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray); // [1, 2, 3, 4]


// Add Elements with Spread Syntax

const countries = ["USA", "UK"];

const allCountries = ["India", ...countries];

console.log(allCountries); // ["India", "USA", "UK"]


// Copying an Array

// Assigning an array to another variable copies
// the reference to the same array.

const original = [1, 2, 3];

const referenceCopy = original;

referenceCopy.push(4);

console.log(original); // [1, 2, 3, 4]


// Shallow Copy with Spread Syntax

const numbersToCopy = [1, 2, 3];

const copiedNumbers = [...numbersToCopy];

copiedNumbers.push(4);

console.log(numbersToCopy); // [1, 2, 3]
console.log(copiedNumbers); // [1, 2, 3, 4]


// Spread syntax creates a new outer array.
//
// Note:
// This is a shallow copy. 
// Nested objects or arrays inside the original array are still referenced.