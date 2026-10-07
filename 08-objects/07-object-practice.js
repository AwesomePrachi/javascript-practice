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

const totalPrice = productDetails.price * productDetails.quantity;

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

console.log(`${gradedStudent.name} got grade ${grade}`);
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

let marksTotal = 0;
let subjectCount = 0;

for (const key in marks) {
    marksTotal += marks[key];
    subjectCount++;
}

const averageMarks = marksTotal / subjectCount;

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


// Objects + Arrays


// 30. Object Containing an Array

const studentWithSubjects = {
    name: "Prachi",
    subjects: [
        "JavaScript",
        "React",
        "Python",
        "Database"
    ]
};

console.log(studentWithSubjects);


// 31. Print Array Items Inside an Object

studentWithSubjects.subjects.forEach((subject) => {
    console.log(subject);
});


// 32. Add an Item to an Object's Array

studentWithSubjects.subjects.push("Node.js");

console.log(studentWithSubjects.subjects);


// 33. Calculate Total Marks from an Object's Array

const studentMarks = {
    name: "Rahul",
    marks: [75, 82, 91, 68]
};

let totalStudentMarks = 0;

for (const mark of studentMarks.marks) {
    totalStudentMarks += mark;
}

console.log(`Total marks: ${totalStudentMarks}`);
// Total marks: 316


// 34. Calculate Average Marks from an Object's Array

let marksSum = 0;

for (const mark of studentMarks.marks) {
    marksSum += mark;
}

const marksAverage =
    marksSum / studentMarks.marks.length;

console.log(`Average marks: ${marksAverage}`);
// Average marks: 79


// Arrays of Objects


// 35. Iterate Over an Array of Objects

const students = [
    { name: "Rahul", age: 21 },
    { name: "Amit", age: 23 },
    { name: "Neha", age: 22 }
];

for (const student of students) {
    console.log(`${student.name} - ${student.age}`);
}


// 36. Find a Student by Name

for (const student of students) {
    if (student.name === "Neha") {
        console.log(`${student.name} - ${student.age}`);
    }
}


// 37. Find the Oldest Student

let oldestStudent = students[0];

for (const student of students) {
    if (student.age > oldestStudent.age) {
        oldestStudent = student;
    }
}

console.log(oldestStudent);
// { name: "Amit", age: 23 }


// 38. Filter Students by Marks

const studentsWithMarks = [
    { name: "Rahul", marks: 45 },
    { name: "Amit", marks: 78 },
    { name: "Neha", marks: 92 },
    { name: "Priya", marks: 38 }
];

for (const student of studentsWithMarks) {
    if (student.marks >= 50) {
        console.log(student.name);
    }
}


// Student Data Analysis


// 39. Count Total Students

let studentCount = 0;

for (const student of studentsWithMarks) {
    studentCount++;
}

console.log(`Total students: ${studentCount}`);
// Total students: 4


// 40. Count Students Who Passed

let passedCount = 0;

for (const student of studentsWithMarks) {
    if (student.marks >= 50) {
        passedCount++;
    }
}

console.log(`Passed students: ${passedCount}`);
// Passed students: 2


// 41. Count Students Who Failed

let failedCount = 0;

for (const student of studentsWithMarks) {
    if (student.marks < 50) {
        failedCount++;
    }
}

console.log(`Failed students: ${failedCount}`);
// Failed students: 2


// 42. Find the Student with the Highest Marks

let highestScoringStudent = studentsWithMarks[0];

for (const student of studentsWithMarks) {
    if (student.marks > highestScoringStudent.marks) {
        highestScoringStudent = student;
    }
}

console.log(highestScoringStudent);
// { name: "Neha", marks: 92 }


// Nested Objects


// 43. Access Nested Properties

const studentInfo = {
    name: "Prachi",
    address: {
        city: "Bhiwandi",
        state: "Maharashtra"
    }
};

const { city, state } = studentInfo.address;

console.log("Name:", studentInfo.name);
console.log("City:", city);
console.log("State:", state);


// 44. Update and Add Nested Properties

studentInfo.address.city = "Thane";
studentInfo.address.pincode = 400001;

console.log(studentInfo.address);


// 45. Access a Three-Level Nested Object

const company = {
    name: "TechCorp",
    employee: {
        name: "Prachi",
        address: {
            city: "Bhiwandi",
            state: "Maharashtra"
        }
    }
};

console.log("Employee:", company.employee.name);
console.log("City:", company.employee.address.city);
console.log("State:", company.employee.address.state);


// 46. Nested Object Destructuring

const companyData = {
    name: "TechCorp",
    employee: {
        name: "Prachi",
        details: {
            age: 22,
            role: "Node.js Developer",
            salary: 25000
        }
    }
};

const { age, role, salary } = companyData.employee.details;

console.log("Employee:", companyData.employee.name);
console.log("Age:", age);
console.log("Role:", role);
console.log("Salary:", salary);


// 47. Nested Object Analysis

const studentData = {
    name: "Prachi",
    personal: {
        age: 22,
        city: "Bhiwandi"
    },
    marks: {
        javascript: 85,
        html: 78,
        css: 82
    }
};

// Student information

console.log("Name:", studentData.name);
console.log("City:", studentData.personal.city);

// Total marks

let total = 0;

for (const subject in studentData.marks) {
    totalMarks += studentData.marks[subject];
}

console.log("Total marks:", total);

// Average marks

let totalSubjectCount = 0;

for (const subject in studentData.marks) {
    totalSubjectCount++;
}

const average = total / totalSubjectCount;

console.log("Average marks:", Math.round(average));

// Check whether the student passed all subjects

let passedAllSubjects = true;

for (const subject in studentData.marks) {
    if (studentData.marks[subject] < 50) {
        passedAllSubjects = false;
        break;
    }
}

if (passedAllSubjects) {
    console.log("Student passed all subjects.");
} else {
    console.log("Student failed.");
}


// Object.keys(), Object.values(), Object.entries()


// 48. Get Object Keys and Values

const userData = {
    name: "Rahul",
    age: 25,
    city: "Mumbai",
    job: "Developer"
};

const userKeys = Object.keys(userData);
const userValues = Object.values(userData);

console.log("Keys:", userKeys);
console.log("Values:", userValues);
console.log("Number of properties:", userKeys.length);


// 49. Iterate Over Object.keys()

for (const key of userKeys) {
    console.log(`${key}: ${userData[key]}`);
}


// 50. Calculate Total Using Object.values()

const productPrices = {
    shirt: 500,
    shoes: 1500,
    watch: 2000,
    pant: 500
};

const totalProductPrice = Object.values(productPrices).reduce(
    (total, price) => total + price,
    0
);

console.log("Total price:", totalProductPrice);
// Total price: 4500


// 51. Find the Most Expensive Product Using Object.entries()

const priceEntries = Object.entries(productPrices);

let mostExpensivePrice = -Infinity;
let mostExpensiveProduct = "";

for (const [product, price] of priceEntries) {
    if (price > mostExpensivePrice) {
        mostExpensivePrice = price;
        mostExpensiveProduct = product;
    }
}

console.log("Most expensive product:", mostExpensiveProduct);
// watch

console.log("Price:", mostExpensivePrice);
// 2000


// 52. Analyze Nested Object Data

const studentAnalysis = {
    name: "Prachi",
    age: 22,
    marks: {
        javascript: 85,
        html: 78,
        css: 92
    }
};

// Student name

console.log("Student:", studentAnalysis.name);

// Number of subjects

const allSubjectCount = Object.keys(studentAnalysis.marks).length;

console.log("Number of subjects:", allSubjectCount);

// Total marks

let sumOfMarks = 0;

for (const mark of Object.values(studentAnalysis.marks)) {
    sumOfMarks += mark;
}

console.log("Total marks:", sumOfMarks);

// Average marks

const averageOfMarks = totalMarks / subjectCount;

console.log("Average marks:", averageOfMarks);

// Highest marks and subject

let highestMark = -Infinity;
let highestSubject = "";

for (const [subject, mark] of Object.entries(studentAnalysis.marks)) {
    if (mark > highestMark) {
        highestMark = mark;
        highestSubject = subject;
    }
}

console.log("Highest marks:", highestMark);
console.log("Highest-scoring subject:", highestSubject);


// Object Destructuring


// 53. Default Values During Destructuring

const specificUser = {
    userName: "Prachi",
    userAge: 22
};

const {
    userName,
    userAge,
    userCity = "Unknown"
} = specificUser;

console.log("Username:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);


// 54. Destructure a Nested Object

const studentDetail = {
    name: "Rahul",
    marks: {
        javascript: 85,
        html: 78,
        css: 92
    }
};

const {
    javascript,
    html,
    css
} = studentDetail.marks;

console.log("Student:", studentDetail.name);
console.log("JavaScript:", javascript);
console.log("HTML:", html);
console.log("CSS:", css);


// 55. Destructure and Calculate

const productInfo = {
    name: "Shoes",
    price: 1500,
    quantity: 3
};

const { price, quantity } = productInfo;

const totalOfProductPrice = price * quantity;

console.log("Total price:", totalOfProductPrice);
// 4500


// 56. Destructure Function Parameters

const studentResult = {
    name: "Amit",
    marks: 85
};

const showStudent = ({ name, marks }) => {
    console.log(`${name} scored ${marks} marks.`);
};

showStudent(studentResult);
// Amit scored 85 marks.


// 57. Destructure Objects from an Array

const studentMarksData = [
    { name: "Rahul", marks: 75 },
    { name: "Amit", marks: 92 },
    { name: "Neha", marks: 88 }
];

for (const { name, marks } of studentMarksData) {
    console.log(`${name} - ${marks}`);
}


// 58. Mini Destructuring Challenge

const employeeDetails = {
    empName: "Prachi",
    empAge: 22,
    empJob: {
        empTitle: "Node.js Developer",
        empSalary: 30000
    },
    empAddress: {
        empCity: "Bhiwandi",
        empState: "Maharashtra"
    }
};

const { empName, empAge } = employeeDetails;
const { empTitle, empSalary } = employeeDetails.job;
const { empCity, empState } = employeeDetails.address;

console.log("Name:", empName);
console.log("Age:", empAge);
console.log("Job:", empTitle);
console.log("Salary:", empSalary);
console.log("City:", empCity);
console.log("State:", empState);


// Object Spread and Rest


// 59. Copy and Update an Object with Spread Syntax

const baseUser = {
    name: "Prachi",
    age: 22
};

const updatedUser = {
    ...baseUser,
    age: 23,
    city: "Mumbai"
};

console.log(updatedUser);
// { name: "Prachi", age: 23, city: "Mumbai" }

console.log(baseUser);
// { name: "Prachi", age: 22 }


// 60. Combine Two Objects

const personalDetails = {
    name: "Prachi",
    age: 22
};

const contactDetails = {
    email: "prachi@gmail.com",
    phone: "9876543210"
};

const combinedUser = {
    ...personalDetails,
    ...contactDetails
};

console.log(combinedUser);
// {
//     name: "Prachi",
//     age: 22,
//     email: "prachi@gmail.com",
//     phone: "9876543210"
// }


// 61. Duplicate Properties with Spread Syntax

const firstUser = {
    name: "Rahul",
    age: 20
};

const secondUser = {
    name: "Amit",
    city: "Mumbai"
};

const mergedUser = {
    ...firstUser,
    ...secondUser
};

console.log(mergedUser);
// {
//     name: "Amit",
//     age: 20,
//     city: "Mumbai"
// }

// When properties have the same key, the later value wins.


// 62. Object Rest Syntax

const userProfile = {
    username: "Prachi",
    age: 22,
    city: "Bhiwandi",
    job: "Developer"
};

const {
    username,
    ...otherUserDetails
} = userProfile;

console.log(username);
// Prachi

console.log(otherUserDetails);
// {
//     age: 22,
//     city: "Bhiwandi",
//     job: "Developer"
// }


// 63. Create a New Object Without a Property

const productInformation = {
    name: "Laptop",
    price: 50000,
    brand: "HP",
    category: "Electronics"
};

const {
    price: productPrice,
    ...productWithoutPrice
} = productInformation;

console.log(productWithoutPrice);
// {
//     name: "Laptop",
//     brand: "HP",
//     category: "Electronics"
// }


// 64. Update a Nested Object with Spread Syntax

const aStudentData = {
    name: "Prachi",
    marks: {
        javascript: 85,
        html: 78,
        css: 92
    }
};

const updatedStudentData = {
    ...aStudentData,
    marks: {
        ...aStudentData.marks,
        javascript: 90
    }
};

console.log(updatedStudentData);
// {
//     name: "Prachi",
//     marks: {
//         javascript: 90,
//         html: 78,
//         css: 92
//     }
// }

console.log(studentData);
// Original object remains unchanged.


// 65. Mini Real-World Challenge

const accountUser = {
    id: 101,
    name: "Prachi",
    email: "prachi@gmail.com",
    password: "abc123",
    city: "Bhiwandi"
};

const {
    password,
    ...safeUser
} = accountUser;

console.log(safeUser);
// {
//     id: 101,
//     name: "Prachi",
//     email: "prachi@gmail.com",
//     city: "Bhiwandi"
// }