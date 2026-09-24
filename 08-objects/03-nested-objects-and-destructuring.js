// Nested Objects and Destructuring


// Nested Objects

const user = {
    name: "Prachi",
    age: 23,
    address: {
        city: "Bhiwandi",
        pin: 421305,
        location: {
            lat: 23.2,
            lng: 45.5
        }
    }
};


// Accessing Nested Properties

console.log(user.address.city); // "Bhiwandi"
console.log(user.address.location.lat); // 23.2
console.log(user.address.location.lng); // 45.5


// Modifying a Nested Property

user.address.city = "Thane";

console.log(user.address.city); // "Thane"


// Object Destructuring

const person = {
    name: "Prachi",
    age: 23,
    email: "prachi@example.com"
};

const { name, age } = person;

console.log(name); // "Prachi"
console.log(age); // 23


// Destructuring Nested Properties

const {
    address: {
        location: {
            lat,
            lng
        }
    }
} = user;

console.log(lat); // 23.2
console.log(lng); // 45.5


// Renaming Variables During Destructuring

const student = {
    name: "Harshita",
    age: 25
};

const {
    name: studentName,
    age: studentAge
} = student;

console.log(studentName); // "Harshita"
console.log(studentAge); // 25


// Destructuring a Property with a Hyphen

const namedUser = {
    "first-name": "Prachi"
};

const {
    "first-name": firstName
} = namedUser;

console.log(firstName); // "Prachi"