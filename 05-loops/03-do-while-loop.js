// do...while Loop

// A do...while loop executes its block at least once
// before checking the condition.

// Syntax:
//
// initialization
//
// do {
//     // code
//     // update
// } while (condition);


// Print numbers from 1 to 5

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// The condition is checked after the first execution

let number = 10;

do {
    console.log(number);
    number++;
} while (number < 5);

// The value 10 is printed even though 10 < 5 is false.
// This happens because the do block executes before
// the condition is checked.