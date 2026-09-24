// find(), some(), and every()


// find()

// find() returns the first element that satisfies
// the provided condition.

const numbers = [1, 2, 4, 1, 3, 6, 7, 9];

const firstOne = numbers.find((number) => {
    return number === 1;
});

console.log(firstOne); // 1


// find() Returns undefined When No Match Exists

const firstNegative = numbers.find((number) => {
    return number < 0;
});

console.log(firstNegative); // undefined


// some()

// some() checks whether at least one element satisfies
// the provided condition.

const scores = [20, 45, 67, 54, 89, 98];

const hasTopScore = scores.some((score) => {
    return score > 85;
});

console.log(hasTopScore); // true


// every()

// every() checks whether all elements satisfy
// the provided condition.

const resultScores = [20, 45, 67, 54, 89, 98];

const allAboveTen = resultScores.every((score) => {
    return score > 10;
});

console.log(allAboveTen); // true


// every() with a Failing Condition

const allAboveThirty = resultScores.every((score) => {
    return score > 30;
});

console.log(allAboveThirty); // false


// Summary

// find()
// → returns the first matching element

// some()
// → returns true if at least one element matches

// every()
// → returns true if all elements match