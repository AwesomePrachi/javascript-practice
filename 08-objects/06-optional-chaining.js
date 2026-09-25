// Optional Chaining


// Basic Optional Chaining

const user = {
    name: "Prachi",
    address: {
        city: "Bhiwandi"
    }
};

console.log(user?.name); // "Prachi"
console.log(user?.address?.city); // "Bhiwandi"


// Missing Property

console.log(user?.phone); // undefined


// Nested Missing Property

console.log(user?.profile?.name); // undefined

// Without optional chaining:
//
// user.profile.name
//
// would throw an error because user.profile is undefined.


// Null Value

const account = {
    profile: null
};

console.log(account?.profile?.name); // undefined


// Undefined Value

const customer = {};

console.log(customer?.profile?.name); // undefined


// Optional Chaining with Arrays

const users = [
    {
        name: "Prachi"
    }
];

console.log(users?.[0]?.name); // "Prachi"
console.log(users?.[1]?.name); // undefined


// Optional Chaining with a Function

const person = {
    greet() {
        console.log("Hello");
    }
};

person.greet?.(); // Hello

person.sayBye?.(); // No error because sayBye is undefined