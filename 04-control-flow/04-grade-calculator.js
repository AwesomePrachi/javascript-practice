// Grade Calculator

function getGrade(score) {

    // Validate the input before checking the grade.
    if (!Number.isFinite(score) || score < 0 || score > 100) {
        return "Invalid Score";
    }

    if (score >= 90) {
        return "A";
    }

    if (score >= 80) {
        return "B";
    }

    if (score >= 70) {
        return "C";
    }

    if (score >= 60) {
        return "D";
    }

    if (score >= 33) {
        return "E";
    }

    return "F";
}


// Practice

console.log(getGrade(95)); // "A"

console.log(getGrade(85)); // "B"

console.log(getGrade(75)); // "C"

console.log(getGrade(65)); // "D"

console.log(getGrade(50)); // "E"

console.log(getGrade(20)); // "F"

console.log(getGrade(101)); // "Invalid Score"

console.log(getGrade(-5)); // "Invalid Score"

console.log(getGrade("95")); // "Invalid Score"