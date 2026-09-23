// Number and Digit Problems


// 1. Count the number of digits

let number = 12345;
let digitCount = 0;

for (; number > 0; number = Math.floor(number / 10)) {
    digitCount++;
}

console.log(digitCount); // 5


// 2. Reverse a number

let value = 12345;
let reversed = 0;

for (; value > 0; value = Math.floor(value / 10)) {
    const digit = value % 10;
    reversed = reversed * 10 + digit;
}

console.log(reversed); // 54321


// 3. Find the sum of digits

let num = 12345;
let sum = 0;

for (; num > 0; num = Math.floor(num / 10)) {
    const digit = num % 10;
    sum += digit;
}

console.log(sum); // 15


// 4. Check whether a number is a palindrome

let original = 1221;
let current = original;
let reverse = 0;

for (; current > 0; current = Math.floor(current / 10)) {
    const digit = current % 10;
    reverse = reverse * 10 + digit;
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// 5. Find the largest digit

let input = 58321;
let largestDigit = 0;

for (; input > 0; input = Math.floor(input / 10)) {
    const digit = input % 10;

    if (digit > largestDigit) {
        largestDigit = digit;
    }
}

console.log(largestDigit); // 8


// 6. Find the smallest digit

let valueForSmallest = 58321;
let smallestDigit = 9;

for (; valueForSmallest > 0; valueForSmallest = Math.floor(valueForSmallest / 10)) {
    const digit = valueForSmallest % 10;

    if (digit < smallestDigit) {
        smallestDigit = digit;
    }
}

console.log(smallestDigit); // 1


// 7. Count even and odd digits

let digitNumber = 583214;
let evenDigits = 0;
let oddDigits = 0;

for (; digitNumber > 0; digitNumber = Math.floor(digitNumber / 10)) {
    const digit = digitNumber % 10;

    if (digit % 2 === 0) {
        evenDigits++;
    } else {
        oddDigits++;
    }
}

console.log(`Even digits: ${evenDigits}`);
console.log(`Odd digits: ${oddDigits}`);


// 8. Find the product of digits

let productNumber = 1234;
let product = 1;

for (; productNumber > 0; productNumber = Math.floor(productNumber / 10)) {
    const digit = productNumber % 10;
    product *= digit;
}

console.log(product); // 24


// 9. Count zero digits

let zeroNumber = 10203040;
let zeroCount = 0;

for (; zeroNumber > 0; zeroNumber = Math.floor(zeroNumber / 10)) {
    const digit = zeroNumber % 10;

    if (digit === 0) {
        zeroCount++;
    }
}

console.log(zeroCount); // 4