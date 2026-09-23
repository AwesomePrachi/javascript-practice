// Rest Parameters and Return Values


// Rest Parameter

// A rest parameter collects the remaining arguments
// into an array.

function collectNumbers(...numbers) {
    console.log(numbers);
}

collectNumbers(1, 2, 3, 4, 5);


// Rest Parameter with Other Parameters

// A rest parameter must be the last parameter.

function showValues(firstValue, secondValue, ...remainingValues) {
    console.log(firstValue);
    console.log(secondValue);
    console.log(remainingValues);
}

showValues("a", "b", "c", "d", "e");


// Return Value

// The return statement sends a value back to the code
// that called the function.

function getNumber() {
    return 12;
}

const value = getNumber();

console.log(value); // 12


// Returning a Calculated Value

function multiplyByTwo(number) {
    return number * 2;
}

const result = multiplyByTwo(15);

console.log(result); // 30


// Return Stops Function Execution

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    }

    return "Zero or Negative";
}

console.log(checkNumber(10)); // "Positive"


// Rest Parameter with Return

function calculateTotal(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30)); // 60