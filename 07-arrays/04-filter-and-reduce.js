// filter() and reduce()


// filter()

// filter() creates a new array containing elements
// for which the callback returns a truthy value.

const numbers = [1, 3, 5, 2, 7, 10, 9, 8];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 10, 8]


// filter() with a Condition

const scores = [45, 72, 31, 90, 58, 84];

const passingScores = scores.filter((score) => {
    return score >= 40;
});

console.log(passingScores); // [45, 72, 90, 58, 84]


// filter() Does Not Mutate the Original Array

console.log(scores); // [45, 72, 31, 90, 58, 84]


// reduce()

// reduce() processes the array and combines its elements
// into a single accumulated result.

const values = [1, 3, 5, 2, 7, 10, 9, 8];

const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sum); // 45


// Understanding the Accumulator

// The second argument, 0, is the initial value
// of the accumulator.
//
// The accumulator keeps the result returned by the
// callback from the previous iteration.
//
// Example:
//
// 0 + 1 = 1
// 1 + 3 = 4
// 4 + 5 = 9
// 9 + 2 = 11
// ...


 // Reduce to Find a Product

const product = [1, 2, 3, 4, 5].reduce((accumulator, value) => {
    return accumulator * value;
}, 1);

console.log(product); // 120


// Reduce to Find the Largest Number

const numbersForLargest = [12, 45, 7, 89, 23];

const largest = numbersForLargest.reduce((currentLargest, value) => {
    return value > currentLargest ? value : currentLargest;
}, numbersForLargest[0]);

console.log(largest); // 89