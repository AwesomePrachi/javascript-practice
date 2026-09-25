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


// Functions + Arrays


// 13. Print All Array Elements

const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

printArray([10, 20, 30, 40]);
// 10
// 20
// 30
// 40


// 14. Find Array Sum

const arraySum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

console.log(arraySum([10, 20, 30]));    // 60


// 15. Find Largest Number

const findLargest = (arr) => {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
};

console.log(findLargest([10, 25, 7, 40, 15]));  // 40


// 16. Find Smallest Number

const findSmallest = (arr) => {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
};

console.log(findSmallest([10, 25, 7, 40, 15]));  // 7


// 17. Count Even Numbers

const countEven = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(countEven([1, 2, 4, 7, 8, 10]));   // 4


// 18. Count Odd Numbers

const countOdd = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

console.log(countOdd([1, 2, 4, 7, 8, 10]));   // 2


// 19. Find a Number

const findNumber = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }

    return false;
};

console.log(findNumber([10, 20, 30, 40], 30));  // true

console.log(findNumber([10, 20, 30, 40], 50));  // false


// 20. Count Occurrences

const countOccurrences = (arr, num) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }

    return count;
};

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));   // 3


// 21. Reverse an Array

const reverseArray = (arr) => {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5]));   // [5, 4, 3, 2, 1]


// 22. Find Second Largest

// Assumption:
// The array contains at least two distinct numbers.

const secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current > largest) {
            secondLargest = largest;
            largest = current;
        }
        else if (
            current > secondLargest &&
            current !== largest
        ) {
            secondLargest = current;
        }
    }

    return secondLargest;
};

console.log(secondLargest([10, 5, 25, 8, 20]));   // 20