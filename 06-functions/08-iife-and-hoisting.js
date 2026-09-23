// IIFE and Function Hoisting


// IIFE

// IIFE stands for Immediately Invoked Function Expression.
//
// It is a function expression that is executed immediately
// after it is created.

(function () {
    console.log("IIFE executed immediately.");
})();


// IIFE with a Local Variable

(function () {
    const message = "Private to the IIFE scope.";

    console.log(message);
})();

// "message" is not accessible outside the IIFE.


// IIFE with Parameters

(function (name) {
    console.log(`Hello, ${name}`);
})("Prachi");


// Function Declaration Hoisting

// Function declarations can be called before their declaration
// within the same scope.

greet();

function greet() {
    console.log("Hello from a function declaration.");
}


// Function Expression with const

// Function expressions assigned to const cannot be called
// before the variable is initialized.

// Uncommenting the following line causes a ReferenceError:
//
// greetUser();
//
// ReferenceError: Cannot access 'greetUser' before initialization

const greetUser = function () {
    console.log("Hello from a function expression.");
};

greetUser();


// Function Expression with var

// With var, the variable is initialized to undefined
// before the assignment happens.

// Uncommenting the following line causes a TypeError:
//
// sayHello();
//
// TypeError: sayHello is not a function

var sayHello = function () {
    console.log("Hello");
};

sayHello();