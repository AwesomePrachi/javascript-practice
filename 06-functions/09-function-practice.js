// Function Practice


// 1. Convert a Function to an Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20


// 2. Default Parameter

function sayHi(name = "Guest") {
    console.log(`Hi ${name}`);
}

sayHi(); // "Hi Guest"


// 3. Rest Parameter

function getScoreTotal(...scores) {
    let total = 0;

    for (const score of scores) {
        total += score;
    }

    return total;
}

console.log(getScoreTotal(40, 66, 98, 45)); // 249


// 4. Early Return

function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }

    return "Allowed";
}

console.log(checkAge(23)); // "Allowed"


// 5. Function as an Argument

function execute(callback) {
    callback("Prachi");
}

execute(function (name) {
    console.log(`${name} is executing a callback.`);
});


// 6. Pure Function

function addToTotal(currentTotal, value) {
    return currentTotal + value;
}

console.log(addToTotal(100, 20)); // 120


// 7. BMI Calculator

function calculateBMI(weight, height) {
    return weight / (height * height);
}

console.log(calculateBMI(69, 1.7).toFixed(2)); // "23.88"


// 8. Discount Calculator Using Closure

function createDiscountCalculator(discount) {
    return function (price) {
        return price - (price * discount / 100);
    };
}

const tenPercentOff = createDiscountCalculator(10);
const twentyPercentOff = createDiscountCalculator(20);

console.log(tenPercentOff(1200)); // 1080

console.log(twentyPercentOff(1200)); // 960


// 9. Counter Using Closure

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1

console.log(counter()); // 2

console.log(counter()); // 3


// 10. Multiplier Using Closure

function createMultiplier(factor) {
    return function (value) {
        return value * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(12)); // 24

console.log(triple(12)); // 36


// 11. IIFE

(function () {
    const message = "Initialized immediately.";

    console.log(message);
})();


// 12. Function Returning undefined

function noReturnValue() {
    return;
}

console.log(noReturnValue()); // undefined