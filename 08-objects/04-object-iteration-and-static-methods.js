// Object Iteration and Static Methods


// for...in

// for...in iterates over an object's enumerable property keys.

const user = {
    name: "Prachi",
    age: 23,
    email: "prachi@example.com"
};

for (const key in user) {
    console.log(key);
}


// Accessing Values with for...in

for (const key in user) {
    console.log(user[key]);
}


// Accessing Key and Value Together

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}


// Why user.key Does Not Work for a Dynamic Key

for (const key in user) {
    console.log(user.key);
    // Looks for a property literally named "key".
}


// Object.keys()

// Object.keys() returns an array containing the object's
// own enumerable property names.

const keys = Object.keys(user);

console.log(keys); // ["name", "age", "email"]


// Using Object.keys() to Access Values

Object.keys(user).forEach((key) => {
    console.log(`${key}: ${user[key]}`);
});


// Object.entries()

// Object.entries() returns an array containing
// [key, value] pairs.

const entries = Object.entries(user);

console.log(entries);

// [
//     ["name", "Prachi"],
//     ["age", 23],
//     ["email", "prachi@example.com"]
// ]


// Using Object.entries()

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});