// for Loop

// A for loop repeats a block of code while
// its condition remains true.

// Syntax:
//
// for (initialization; condition; update) {
//     // code
// }


// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Print odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Multiplication table

const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}