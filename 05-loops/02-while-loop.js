// while Loop

// A while loop repeatedly executes a block of code
// as long as its condition is true.

// Syntax:
//
// initialization
//
// while (condition) {
//     // code
//     // update
// }


// Print numbers from 1 to 10

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// Print numbers from 10 to 1

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Print even numbers from 1 to 20

let number = 1;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number);
    }

    number++;
}


// Find the sum of numbers from 1 to 10

let current = 1;
let sum = 0;

while (current <= 10) {
    sum += current;
    current++;
}

console.log(sum); // 55