// Property Access and Computed Properties


// Dot Notation

const user = {
    name: "Prachi",
    age: 23
};

console.log(user.name); // "Prachi"
console.log(user.age); // 23


// Bracket Notation

console.log(user["name"]); // "Prachi"
console.log(user["age"]); // 23


// Dynamic Property Access

const key = "name";

console.log(user[key]); // "Prachi"


// Dot Notation with a Variable

// Dot notation treats the identifier after the dot
// as the literal property name.

console.log(user.key); // undefined

// JavaScript looks for a property literally named "key".


// Bracket Notation with a Variable

// Bracket notation evaluates the expression inside [].

console.log(user[key]); // "Prachi"


// Property Names with Special Characters

const person = {
    "first-name": "Prachi",
    age: 23
};

// Dot notation cannot be used for "first-name".

console.log(person["first-name"]); // "Prachi"


// Computed Property Names

// A computed property name allows an expression to
// determine the property name when the object is created.

const propertyName = "role";

const profile = {
    name: "Prachi",
    [propertyName]: "Developer"
};

console.log(profile); // { name: "Prachi", role: "Developer" }


// Dynamic Computed Property

const field = "city";

const location = {
    [field]: "Bhiwandi"
};

console.log(location); // { city: "Bhiwandi" }