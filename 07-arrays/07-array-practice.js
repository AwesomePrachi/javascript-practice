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

const evenNumbersList = [2, 4, 6, 8, 10];

const allEven = evenNumbersList.every((number) => {
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


// map() Practice


// 26. Add 5 to Every Number

const numbersToIncrease = [10, 20, 30, 40];

const increasedNumbers = numbersToIncrease.map((number) => {
    return number + 5;
});

console.log(increasedNumbers);
// [15, 25, 35, 45]


// 27. Add Tax to Prices

const productPrices = [100, 200, 300, 400];

const pricesWithTax = productPrices.map((price) => {
    return price + (price * 0.10);
});

console.log(pricesWithTax);
// [110, 220, 330, 440]


// 28. Convert Names to Uppercase

const friendNames = ["rahul", "amit", "neha", "priya"];

const uppercaseNames = friendNames.map((name) => {
    return name.toUpperCase();
});

console.log(uppercaseNames);
// ["RAHUL", "AMIT", "NEHA", "PRIYA"]


// 29. Format Prices with Currency Symbol

const prices = [100, 250, 500, 1000];

const formattedPrices = prices.map((price) => {
    return `₹${price}`;
});

console.log(formattedPrices);
// ["₹100", "₹250", "₹500", "₹1000"]


// 30. Convert Ages to Birth Years

const ages = [20, 25, 30, 18];
const currentYear = 2026;

const birthYears = ages.map((age) => {
    return currentYear - age;
});

console.log(birthYears);
// [2006, 2001, 1996, 2008]


// 31. Convert Minutes to Seconds

const minutes = [1, 2, 5, 10];

const seconds = minutes.map((minute) => {
    return minute * 60;
});

console.log(seconds);
// [60, 120, 300, 600]


// 32. Add Availability Status to Products

const products = ["shirt", "shoes", "watch", "bag"];

const availableProducts = products.map((product) => {
    return `${product} - Available`;
});

console.log(availableProducts);
// [
//     "shirt - Available",
//     "shoes - Available",
//     "watch - Available",
//     "bag - Available"
// ]


// filter() Practice


// 33. Filter Even Numbers

const numbersForEvenFilter = [10, 15, 22, 7, 8, 13, 16];

const evenNumbers = numbersForEvenFilter.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);
// [10, 22, 8, 16]


// 34. Filter Passing Marks

const marksForFilter = [35, 72, 28, 90, 45, 18, 60];

const passedMarks = marksForFilter.filter((mark) => {
    return mark >= 40;
});

console.log(passedMarks);
// [72, 90, 45, 60]


// 35. Filter Names Longer Than 5 Characters

const namesForFilter = [
    "Rahul",
    "Prachi",
    "Amit",
    "Priyanka",
    "Neha",
    "Sanjay"
];

const longNames = namesForFilter.filter((name) => {
    return name.length > 5;
});

console.log(longNames);
// ["Prachi", "Priyanka", "Sanjay"]


// 36. Filter Available Products

const productsByAvailability = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false }
];

const filteredProducts = productsByAvailability.filter((product) => {
    return product.available === true;
});

console.log(filteredProducts);
// [
//     { name: "Laptop", available: true },
//     { name: "Mouse", available: true }
// ]


// 37. Filter Expensive Products

const productsByPrice = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2500 },
    { name: "Bag", price: 800 }
];

const expensiveProducts = productsByPrice.filter((product) => {
    return product.price > 1000;
});

console.log(expensiveProducts);
// [
//     { name: "Shoes", price: 1500 },
//     { name: "Watch", price: 2500 }
// ]


// 38. Filter Passing Students

const studentsByMarks = [
    { name: "Rahul", marks: 75 },
    { name: "Amit", marks: 32 },
    { name: "Priya", marks: 88 },
    { name: "Neha", marks: 25 },
    { name: "Sanjay", marks: 64 }
];

const passedStudents = studentsByMarks.filter((student) => {
    return student.marks >= 40;
});

console.log(passedStudents);
// [
//     { name: "Rahul", marks: 75 },
//     { name: "Priya", marks: 88 },
//     { name: "Sanjay", marks: 64 }
// ]


// find() Practice


// 39. Find a Product by Name

const productsForSearch = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2500 }
];

const foundProduct = productsForSearch.find((product) => {
    return product.name === "Shoes";
});

console.log(foundProduct);
// { name: "Shoes", price: 1500 }


// 40. Find the First Expensive Product

const productsForPriceSearch = [
    { name: "Pen", price: 50 },
    { name: "Bag", price: 800 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2500 }
];

const firstExpensiveProduct = productsForPriceSearch.find((product) => {
    return product.price > 1000;
});

console.log(firstExpensiveProduct);
// { name: "Shoes", price: 1500 }


// 41. Find the First Active User

const users = [
    { id: 1, name: "Rahul", isActive: false },
    { id: 2, name: "Amit", isActive: false },
    { id: 3, name: "Prachi", isActive: true },
    { id: 4, name: "Neha", isActive: true }
];

const activeUser = users.find((user) => {
    return user.isActive === true;
});

console.log(activeUser);
// { id: 3, name: "Prachi", isActive: true }