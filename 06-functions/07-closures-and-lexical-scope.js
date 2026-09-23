// Closures and Lexical Scope


// Lexical Scope

// Lexical scope means that variable accessibility is
// determined by where variables and functions are written
// in the source code.

function outer() {
    const outerValue = "outer";

    function middle() {
        const middleValue = "middle";

        function inner() {
            const innerValue = "inner";

            console.log(outerValue);
            console.log(middleValue);
            console.log(innerValue);
        }

        inner();
    }

    middle();
}

outer();


// Closure

// A closure occurs when a function retains access to
// variables from its surrounding lexical scope even after
// the outer function has finished executing.

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


// Separate Closures Have Separate State

const counterOne = createCounter();
const counterTwo = createCounter();

console.log(counterOne()); // 1

console.log(counterOne()); // 2

console.log(counterTwo()); // 1

console.log(counterOne()); // 3

console.log(counterTwo()); // 2


// Closure with a Value

function createMultiplier(factor) {
    return function (value) {
        return value * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10)); // 20

console.log(triple(10)); // 30