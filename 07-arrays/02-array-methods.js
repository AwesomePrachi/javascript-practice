// Array Methods


// push()

// Adds one or more elements to the end of an array.

const numbers = [5, 6, 7, 8, 9];

numbers.push(10);

console.log(numbers); // [5, 6, 7, 8, 9, 10]


// pop()

// Removes the last element from an array.

numbers.pop();

console.log(numbers); // [5, 6, 7, 8, 9]


// unshift()

// Adds one or more elements to the beginning of an array.

numbers.unshift(4);

console.log(numbers); // [4, 5, 6, 7, 8, 9]


// shift()

// Removes the first element from an array.

numbers.shift();

console.log(numbers); // [5, 6, 7, 8, 9]


// splice()

// splice() can add, remove, or replace elements.
// It mutates the original array.

const values = [10, 20, 30, 40, 50];

values.splice(2, 1);

console.log(values); // [10, 20, 40, 50]


// splice() - Add Elements

const colors = ["Green", "Yellow"];

colors.splice(1, 0, "Red", "Blue");

console.log(colors); // ["Green", "Red", "Blue", "Yellow"]


// splice() - Replace Elements

const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits); // ["Apple", "Orange", "Mango"]


// slice()

// slice() returns a new array containing a selected portion
// of the original array.
// It does not mutate the original array.

const items = [1, 2, 3, 4, 5];

const selectedItems = items.slice(1, 4);

console.log(selectedItems); // [2, 3, 4]
console.log(items); // [1, 2, 3, 4, 5]


// reverse()

// reverse() reverses the array in place.
// It mutates the original array.

const valuesToReverse = [1, 2, 3, 4, 5];

valuesToReverse.reverse();

console.log(valuesToReverse); // [5, 4, 3, 2, 1]


// sort()

// sort() sorts the array in place.
// By default, elements are converted to strings
// and sorted lexicographically.

const names = ["Zara", "Arjun", "Mira", "Bhavya"];

names.sort();

console.log(names); // ["Arjun", "Bhavya", "Mira", "Zara"]


// Numeric Sorting

// For numbers, provide a comparison function.

const scores = [45, 12, 89, 34, 67];

scores.sort((a, b) => a - b);

console.log(scores); // [12, 34, 45, 67, 89]


// Descending Numeric Sort

scores.sort((a, b) => b - a);

console.log(scores); // [89, 67, 45, 34, 12]


// Mutation Summary

// The following methods mutate the original array:

// push()
// pop()
// shift()
// unshift()
// splice()
// reverse()
// sort()

// slice() does not mutate the original array.