// Nested Loops and Patterns

// A nested loop is a loop inside another loop.
// The inner loop runs completely for each iteration
// of the outer loop.


// Increasing Star Pattern

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}


// Decreasing Star Pattern

// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}


// Number Pattern

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}


// Repeated Number Pattern

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += i;
    }

    console.log(pattern);
}


// Alphabet Pattern

// A
// AB
// ABC
// ABCD
// ABCDE

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += String.fromCharCode(64 + j);
    }

    console.log(pattern);
}