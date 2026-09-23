// Loop Practice


// 1. Find the sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum); // 5050


// 2. Find the sum of even numbers from 1 to 20

let evenSum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}

console.log(evenSum); // 110


// 3. Count numbers divisible by 5 from 1 to 50

let divisibleByFiveCount = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        divisibleByFiveCount++;
    }
}

console.log(divisibleByFiveCount); // 10


// 4. Print numbers divisible by 3 from 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// 5. Count even and odd numbers from 1 to 100

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);


// 6. Find the sum of odd numbers from 1 to 100

let oddSum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
    }
}

console.log(oddSum); // 2500


// 7. Factorial

const n = 5;
let factorial = 1;

for (let i = n; i >= 1; i--) {
    factorial *= i;
}

console.log(factorial); // 120


// 8. FizzBuzz

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// 9. Print whether each number is even or odd

const limit = 10;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}