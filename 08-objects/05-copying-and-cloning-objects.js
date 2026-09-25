// Copying and Cloning Objects


// Copying with Object Spread

const original = {
    name: "Prachi",
    age: 23
};

const copy = {
    ...original
};

console.log(copy); // { name: "Prachi", age: 23 }


// Spread Creates a New Object

copy.age = 24;

console.log(copy.age); // 24
console.log(original.age); // 23

// Changing the copied object's top-level property
// does not change the original object.


// Object.assign()

const user = {
    name: "Prachi",
    age: 23
};

const userCopy = Object.assign({}, user);

console.log(userCopy); // { name: "Prachi", age: 23 }


// Object.assign() with Existing Properties

const defaultUser = {
    isActive: true
};

const completeUser = Object.assign(
    {},
    defaultUser,
    user
);

console.log(completeUser);
// {
//     isActive: true,
//     name: "Prachi",
//     age: 23
// }


// Shallow Copy

// Object spread and Object.assign() perform shallow copies.
//
// Top-level properties are copied,
// but nested objects are still shared.

const person = {
    name: "Aman",
    age: 24,
    address: {
        city: "Bhiwandi"
    }
};

const shallowCopy = {
    ...person
};

shallowCopy.address.city = "Madikeri";

console.log(person.address.city); // "Madikeri"
console.log(shallowCopy.address.city); // "Madikeri"

// Both objects reference the same nested address object.


// Deep Copy with JSON Serialization

// JSON serialization can be used to create a deep copy
// for data that is fully compatible with JSON.

const originalUser = {
    name: "Aman",
    age: 24,
    address: {
        city: "Bhiwandi"
    }
};

const deepCopy = JSON.parse(
    JSON.stringify(originalUser)
);

deepCopy.address.city = "Madikeri";

console.log(deepCopy.address.city); // "Madikeri"
console.log(originalUser.address.city); // "Bhiwandi"


// JSON Deep-Copy Limitations

// JSON.parse(JSON.stringify(...)) is not a general-purpose
// deep-cloning solution.
//
// It does not preserve all JavaScript values and types,
// such as functions, undefined, Symbol values, BigInt,
// Map, Set, and certain other object types.
//
// For supported values, structuredClone() is a built-in
// option for deep cloning.


// structuredClone()

const source = {
    name: "Prachi",
    address: {
        city: "Bhiwandi"
    }
};

const clonedUser = structuredClone(source);

clonedUser.address.city = "Thane";

console.log(clonedUser.address.city); // "Thane"
console.log(source.address.city); // "Bhiwandi"