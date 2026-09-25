// Object Practice


// 1. Create an Object

const student = {
    name: "Harshita",
    age: 25,
    isEnrolled: false
};

console.log(student);


// 2. Access a Property with Dot Notation

console.log(student.name);
// Harshita


// 3. Access a Property with Bracket Notation

console.log(student["age"]);
// 25


// 4. Access a Dynamic Property

const key = "age";

console.log(student[key]);
// 25


// 5. Access a Property with a Hyphen

const person = {
    "first-name": "Prachi"
};

console.log(person["first-name"]);
// Prachi


// 6. Rename a Property During Destructuring

const namedUser = {
    "first-name": "Prachi"
};

const {
    "first-name": firstName
} = namedUser;

console.log(firstName);
// Prachi


// 7. Iterate Over Object Keys

const course = {
    title: "JavaScript",
    duration: "4 weeks"
};

for (const key in course) {
    console.log(key);
}


// 8. Print Key-Value Pairs

Object.entries(course).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// title: JavaScript
// duration: 4 weeks


// 9. Copy an Object with Spread Syntax

const original = {
    a: 1,
    b: 2
};

const copy = {
    ...original
};

console.log(copy);
// { a: 1, b: 2 }


// 10. Demonstrate a Shallow Copy

const objectWithNestedData = {
    info: {
        score: 80
    }
};

const shallowCopy = {
    ...objectWithNestedData
};

shallowCopy.info.score = 100;

console.log(objectWithNestedData.info.score);
// 100

// The nested object is shared between both objects.


// 11. Deep Clone the Object

const objectToClone = {
    info: {
        score: 80
    }
};

const clonedObject = structuredClone(objectToClone);

clonedObject.info.score = 70;

console.log(clonedObject.info.score);
// 70

console.log(objectToClone.info.score);
// 80


// 12. Optional Chaining

const user = {};

console.log(user?.profile?.name);
// undefined


// 13. Computed Property

const roleKey = "role";

const profile = {
    name: "Prachi",
    [roleKey]: "admin"
};

console.log(profile);
// { name: "Prachi", role: "admin" }


// 14. Number and Boolean Property Keys

const values = {
    true: "yes",
    45: "number"
};

console.log(values[true]);
// yes

console.log(values[45]);
// number

// Object property keys are strings or Symbols.
// The boolean and number keys above are converted
// to the strings "true" and "45".