// switch statement

// A switch statement compares an expression
// against multiple case values.


// Basic switch

const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}


// Multiple Cases

const fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a common fruit.");
        break;

    case "mango":
        console.log("This is a tropical fruit.");
        break;

    default:
        console.log("Unknown fruit.");
}


// Fall-through

// If break is omitted, execution continues
// into the following case.
//
// This behavior is called fall-through.
// It can be intentional, but accidental fall-through
// can cause unexpected behavior.

const number = 1;

switch (number) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");
        break;

    default:
        console.log("Other");
}