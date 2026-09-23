// break and continue

// break exits the loop completely.
//
// continue skips the current iteration
// and continues with the next iteration.


// break

// Stop the loop when i reaches 5.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}


// continue

// Skip the number 5.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}


// Stop at the first number divisible by 7.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`First multiple of 7: ${i}`);
        break;
    }
}


// Skip numbers divisible by 3.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}


// Print the first 5 odd numbers

let oddCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);

    oddCount++;

    if (oddCount === 5) {
        break;
    }
}