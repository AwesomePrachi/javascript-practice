// forEach() and map()


// forEach()

// forEach() executes a callback once for each element in the array.

const scores = [23, 56, 74, 65, 78, 89, 90];

scores.forEach((score) => {
    console.log(score);
});


// forEach() with a Calculation

scores.forEach((score) => {
    console.log(score + 5);
});


// forEach() does not return a new array.

const result = scores.forEach((score) => {
    return score * 2;
});

console.log(result); // undefined


// The original array is still unchanged.

console.log(scores); // [23, 56, 74, 65, 78, 89, 90]


// map()

// map() creates and returns a new array by applying
// a callback function to every element.

const doubledScores = scores.map((score) => {
    return score * 2;
});

console.log(doubledScores); // [46, 112, 148, 130, 156, 178, 180]


// The original array remains unchanged.

console.log(scores); // [23, 56, 74, 65, 78, 89, 90]


// map() Can Return Any Value

const fixedValues = scores.map(() => {
    return 12;
});

console.log(fixedValues); // [12, 12, 12, 12, 12, 12, 12]


// map() Without a Return Value

// If the callback does not return a value,
// each position in the new array contains undefined.

const emptyResults = scores.map(() => {});

console.log(emptyResults); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// map() Is for Transformation

// If you want to keep only certain elements,
// use filter() instead of map().

const numbers = [1, 2, 3, 4, 5];

const transformed = numbers.map((number) => {
    return number * 10;
});

console.log(transformed); // [10, 20, 30, 40, 50]