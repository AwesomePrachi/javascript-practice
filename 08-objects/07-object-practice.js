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


// Object + Conditions and Problem Solving


// 15. Change a Property

const personToUpdate = {
    name: "Rahul",
    age: 25
};

personToUpdate.age = 26;

console.log(personToUpdate);
// { name: "Rahul", age: 26 }


// 16. Add a New Property

const car = {
    brand: "Toyota",
    model: "Fortuner"
};

car.year = 2026;

console.log(car);
// { brand: "Toyota", model: "Fortuner", year: 2026 }


// 17. Delete a Property

const userToUpdate = {
    name: "Amit",
    age: 22,
    city: "Mumbai"
};

delete userToUpdate.city;

console.log(userToUpdate);
// { name: "Amit", age: 22 }


// 18. Check a Property Value

const product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
};

if (product.price > 40000) {
    console.log("Expensive");
} else {
    console.log("Affordable");
}


// 19. Update Multiple Properties

const employee = {
    name: "Neha",
    age: 24,
    salary: 30000
};

Object.assign(employee, {
    age: 25,
    salary: 35000
});

console.log(employee);
// { name: "Neha", age: 25, salary: 35000 }


// 20. Object + if...else

const resultStudent = {
    name: "Riya",
    marks: 75
};

if (resultStudent.marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 21. Find the Older Person

const person1 = {
    name: "Rahul",
    age: 22
};

const person2 = {
    name: "Amit",
    age: 25
};

if (person1.age > person2.age) {
    console.log(person1.name);
} else {
    console.log(person2.name);
}

// Amit


// 22. Object Property Calculation

const productDetails = {
    name: "Phone",
    price: 20000,
    quantity: 3
};

const totalPrice =
    productDetails.price * productDetails.quantity;

console.log(`Total price: ${totalPrice}`);
// Total price: 60000


// 23. Object-Based Grade Calculator

const gradedStudent = {
    name: "Prachi",
    marks: 82
};

function getGrade(student) {
    const { marks } = student;

    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

const grade = getGrade(gradedStudent);

console.log(
    `${gradedStudent.name} got grade ${grade}`
);
// Prachi got grade B


// Object + for...in


// 24. Count Object Properties

const account = {
    name: "Amit",
    age: 25,
    city: "Mumbai",
    job: "Developer"
};

let propertyCount = 0;

for (const key in account) {
    propertyCount++;
}

console.log(propertyCount);
// 4


// 25. Calculate Total of Object Values

const marks = {
    math: 80,
    science: 75,
    english: 90,
    computer: 85
};

let totalMarks = 0;

for (const key in marks) {
    totalMarks += marks[key];
}

console.log(totalMarks);
// 330


// 26. Calculate Average of Object Values

let marksSum = 0;
let subjectCount = 0;

for (const key in marks) {
    marksSum += marks[key];
    subjectCount++;
}

const averageMarks = marksSum / subjectCount;

console.log(averageMarks);
// 82.5


// 27. Count Values Greater Than 50

const subjectMarks = {
    math: 80,
    science: 45,
    english: 72,
    computer: 35,
    history: 90
};

let aboveFifty = 0;

for (const key in subjectMarks) {
    if (subjectMarks[key] > 50) {
        aboveFifty++;
    }
}

console.log(aboveFifty);
// 3


// 28. Find the Largest Value and Its Key

const scores = {
    Rahul: 75,
    Amit: 92,
    Neha: 88,
    Priya: 81
};

let largestScore = -Infinity;
let topScorer = "";

for (const key in scores) {
    if (scores[key] > largestScore) {
        largestScore = scores[key];
        topScorer = key;
    }
}

console.log(largestScore);
// 92

console.log(topScorer);
// Amit


// 29. Find a Specific Property

const studentDetails = {
    name: "Prachi",
    age: 22,
    course: "MERN Stack",
    city: "Bhiwandi"
};

const searchProperty = "course";

let propertyFound = false;

for (const key in studentDetails) {
    if (key === searchProperty) {
        propertyFound = true;
        break;
    }
}

if (propertyFound) {
    console.log("Property found");
} else {
    console.log("Property not found");
}

// Property found