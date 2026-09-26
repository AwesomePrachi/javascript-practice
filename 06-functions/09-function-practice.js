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


// Mixed Function Problems

// These problems combine functions with conditions,
// loops, strings, and arrays.


// 23. Find Positive Numbers

const getPositiveNumbers = (arr) => {
    const positiveNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }

    return positiveNumbers;
};

console.log(getPositiveNumbers([-2, 5, -8, 10, 3]));
// [5, 10, 3]


// 24. Find Numbers Greater Than 10

const greaterThanTen = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            result.push(arr[i]);
        }
    }

    return result;
};

console.log(greaterThanTen([5, 12, 8, 20, 3, 15]));
// [12, 20, 15]


// 25. Calculate Average

// Assumption: The array contains at least one number.

const calculateAverage = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};

console.log(calculateAverage([10, 20, 30, 40])); // 25


// 26. Find Second Smallest

// Assumption: The array contains at least two distinct numbers.

const secondSmallest = (arr) => {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current < smallest) {
            secondSmallest = smallest;
            smallest = current;
        }
        else if (
            current < secondSmallest &&
            current !== smallest
        ) {
            secondSmallest = current;
        }
    }

    return secondSmallest;
};

console.log(secondSmallest([10, 5, 25, 8, 20])); // 8


// 27. Remove Duplicate Numbers

const removeDuplicates = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }

    return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 1, 4, 3]));
// [1, 2, 3, 4]


// 28. Find Common Elements

// Returns unique values that exist in both arrays.

const findCommon = (arr1, arr2) => {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (
                arr1[i] === arr2[j] &&
                !result.includes(arr1[i])
            ) {
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
};

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]


// 29. Count Vowels in an Array of Words

// Counts lowercase vowels.

const countTotalVowels = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (
                arr[i][j] === "a" ||
                arr[i][j] === "e" ||
                arr[i][j] === "i" ||
                arr[i][j] === "o" ||
                arr[i][j] === "u"
            ) {
                count++;
            }
        }
    }

    return count;
};

console.log(countTotalVowels(["apple", "banana", "cat"])); // 6


// 30. Find the Longest Word

const longestWord = (arr) => {
    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
};

console.log(longestWord(["cat", "elephant", "dog", "tiger"])); // elephant


// 31. Check Palindrome Array

const isArrayPalindrome = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

console.log(isArrayPalindrome([1, 2, 3, 2, 1])); // true

console.log(isArrayPalindrome([1, 2, 3, 4])); // false


// 32. Find Duplicate Values

const findDuplicates = (arr) => {
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }

                break;
            }
        }
    }

    return duplicates;
};

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));
// [1, 2]