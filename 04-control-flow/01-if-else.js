// if, if...else and else if


// if

const age = 22;

if (age >= 18) {
    console.log("Eligible to vote.");
}


// if...else

const temperature = 35;

if (temperature >= 30) {
    console.log("Hot");
} else {
    console.log("Pleasant");
}


// else if

const score = 75;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Average");
} else {
    console.log("Needs improvement");
}


// Logical Conditions

const marks = 85;

if (marks >= 0 && marks <= 100) {
    console.log("Valid marks");
} else {
    console.log("Invalid marks");
}