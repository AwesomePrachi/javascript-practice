// Early Return

// An early return exits a function as soon as
// a condition is met or a specific case is handled.


// Basic Example

function checkAge(age) {
    if (age < 18) {
        return "Not eligible";
    }

    return "Eligible";
}

console.log(checkAge(16)); // "Not eligible"

console.log(checkAge(22)); // "Eligible"


// Multiple Early Returns

function getAccessStatus(isLoggedIn, isAdmin) {
    if (!isLoggedIn) {
        return "Please log in.";
    }

    if (!isAdmin) {
        return "Access denied.";
    }

    return "Access granted.";
}

console.log(getAccessStatus(false, false)); // "Please log in."

console.log(getAccessStatus(true, false)); // "Access denied."

console.log(getAccessStatus(true, true)); // "Access granted."