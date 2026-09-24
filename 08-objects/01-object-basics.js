// Object Basics


// Creating an Object

const user = {
    name: "Prachi",
    age: 23,
    isActive: true
};

console.log(user);


// Accessing Object Properties

// Dot notation

console.log(user.name); // "Prachi"
console.log(user.age); // 23


// Modifying Object Properties

user.age = 24;

console.log(user.age); // 24


// Adding a New Property

user.email = "prachi@example.com";

console.log(user.email); // "prachi@example.com"


// Deleting a Property

delete user.isActive;

console.log(user);
// {
//     name: "Prachi",
//     age: 24,
//     email: "prachi@example.com"
// }


// Objects Can Store Different Types of Values

const profile = {
    name: "Prachi",
    age: 23,
    isDeveloper: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Bhiwandi"
    }
};

console.log(profile);


// Checking Whether a Property Exists

console.log("name" in profile); // true
console.log("phone" in profile); // false