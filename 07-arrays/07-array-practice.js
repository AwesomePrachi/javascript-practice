// Array Practice


// 1. Access the Second Element

const fruits = ["apple", "orange", "guava"];

console.log(fruits[1]); // orange


// 2. Add Elements to the Beginning and End

const fruitList = ["apple", "orange", "guava"];

fruitList.push("mango");
fruitList.unshift("pineapple");

console.log(fruitList); // ["pineapple", "apple", "orange", "guava", "mango"]


// 3. Replace an Array Element

const fruitsToUpdate = ["pineapple", "apple", "orange", "guava", "mango"];

fruitsToUpdate[3] = "kiwi";

console.log(fruitsToUpdate); // ["pineapple", "apple", "orange", "kiwi", "mango"]


// 4. Remove the Last Element

const numbers = [1, 2, 3, 4, 5];

numbers.pop();

console.log(numbers); // [1, 2, 3, 4]


// 5. Insert Elements at a Specific Index

const colors = ["Green", "Yellow"];

colors.splice(1, 0, "Red", "Blue");

console.log(colors); // ["Green", "Red", "Blue", "Yellow"]


// 6. Extract the Middle Three Elements

const items = [1, 2, 3, 4, 5, 6, 7];

const middleItems = items.slice(2, 5);

console.log(middleItems); // [3, 4, 5]


// 7. Sort Alphabetically and Reverse

const names = ["Zara", "Arjun", "Mira", "Bhavya"];

names.sort().reverse();

console.log(names); // ["Zara", "Mira", "Bhavya", "Arjun"]


// 8. Square Each Number with map()

const values = [1, 2, 3, 4];

const squares = values.map((value) => {
    return value * value;
});

console.log(squares); // [1, 4, 9, 16]


// 9. Keep Numbers Greater Than 10 with filter()

const numbersToFilter = [5, 12, 18, 3, 20];

const greaterThanTen = numbersToFilter.filter((number) => {
    return number > 10;
});

console.log(greaterThanTen); // [12, 18, 20]


// 10. Find the Sum with reduce()

const numbersToSum = [10, 20, 30];

const sum = numbersToSum.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sum); // 60


// 11. Find the First Number Less Than 10

const numbersToFind = [12, 15, 3, 6, 20];

const firstLessThanTen = numbersToFind.find((number) => {
    return number < 10;
});

console.log(firstLessThanTen); // 3


// 12. Check Whether Any Student Scored Below 35

const studentScores = [45, 28, 60, 90, 49];

const hasLowScore = studentScores.some((score) => {
    return score < 35;
});

console.log(hasLowScore); // true


// 13. Check Whether All Numbers Are Even

const evenNumbers = [2, 4, 6, 8, 10];

const allEven = evenNumbers.every((number) => {
    return number % 2 === 0;
});

console.log(allEven); // true


// 14. Array Destructuring

const fullName = ["Prachi", "Patel"];

const [firstName, lastName] = fullName;

console.log(firstName); // Prachi
console.log(lastName); // Patel


// 15. Merge Two Arrays with Spread Syntax

const first = [1, 2];
const second = [3, 4];

const merged = [...first, ...second];

console.log(merged); // [1, 2, 3, 4]


// 16. Add an Element at the Beginning with Spread Syntax

const countryList = ["USA", "UK"];

const updatedCountries = ["India", ...countryList];

console.log(updatedCountries); // ["India", "USA", "UK"]


// 17. Clone an Array with Spread Syntax

const birds = ["peacock", "sparrow", "owl"];

const copiedBirds = [...birds];

console.log(copiedBirds); // ["peacock", "sparrow", "owl"]


// 18. Find the Largest Number

const valuesForLargest = [12, 45, 7, 89, 23];

let largest = valuesForLargest[0];

for (const value of valuesForLargest) {
    if (value > largest) {
        largest = value;
    }
}

console.log(largest); // 89


// 19. Count Even Numbers

const valuesForEvenCount = [12, 7, 18, 5, 20, 9, 14];

let evenCount = 0;

for (const value of valuesForEvenCount) {
    if (value % 2 === 0) {
        evenCount++;
    }
}

console.log(evenCount); // 4


// 20. Find Common Elements

const firstValues = [10, 20, 30, 40];
const secondValues = [20, 40, 50, 60];

const commonValues = [];

for (const value of firstValues) {
    if (secondValues.includes(value)) {
        commonValues.push(value);
    }
}

console.log(commonValues); // [20, 40]


// 21. Count Occurrences of a Value

const occurrenceValues = [10, 20, 10, 30, 10, 40, 20];

let count = 0;

for (const value of occurrenceValues) {
    if (value === 10) {
        count++;
    }
}

console.log(count); // 3


// 22. Create an Array of Even Numbers

const numbersForEvenArray = [10, 15, 22, 7, 8, 13, 16];

const evenArray = [];

for (const number of numbersForEvenArray) {
    if (number % 2 === 0) {
        evenArray.push(number);
    }
}

console.log(evenArray); // [10, 22, 8, 16]


// 23. Double Every Number

const numbersToDouble = [2, 4, 6, 8, 10];

const doubledNumbers = [];

for (const number of numbersToDouble) {
    doubledNumbers.push(number * 2);
}

console.log(doubledNumbers); // [4, 8, 12, 16, 20]


// 24. Reverse an Array into a New Array

const originalNumbers = [10, 20, 30, 40, 50];

const reversedNumbers = [];

for (let index = originalNumbers.length - 1; index >= 0; index--) {
    reversedNumbers.push(originalNumbers[index]);
}

console.log(reversedNumbers); // [50, 40, 30, 20, 10]


// 25. Shopping Cart Practice

const cart = ["shirt", "shoes", "watch"];

cart.push("bag");
cart.unshift("cap");
cart.splice(3, 1);

console.log(cart.includes("shoes")); // true
console.log(cart); // ["cap", "shirt", "shoes", "bag"]