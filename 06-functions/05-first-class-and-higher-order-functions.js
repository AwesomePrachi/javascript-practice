// First-Class Functions and Higher-Order Functions


// First-Class Functions

// JavaScript treats functions as values.
// A function can be:
// - assigned to a variable
// - passed as an argument
// - returned from another function
// - stored in an array or object


// Assigning a Function to a Variable

const greet = function () {
    console.log("Hello");
};

greet();


// Passing a Function as an Argument

function execute(callback) {
    callback();
}

execute(function () {
    console.log("Callback executed.");
});


// Passing a Named Function as an Argument

function sayHello() {
    console.log("Hello from sayHello.");
}

execute(sayHello);


// Higher-Order Function

// A higher-order function is a function that accepts
// a function as an argument or returns a function.

function runCallback(callback) {
    callback("Prachi");
}

runCallback(function (name) {
    console.log(`${name} is learning JavaScript.`);
});


// Higher-Order Function That Returns a Function

function createGreeting() {
    return function () {
        console.log("Hello from the returned function.");
    };
}

const greeting = createGreeting();

greeting();


// Callback with Parameters

function processValue(value, callback) {
    const result = callback(value);
    console.log(result);
}

processValue(5, function (number) {
    return number * 2;
});