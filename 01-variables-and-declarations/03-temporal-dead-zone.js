// Temporal Dead Zone (TDZ)

// The binding exists, but it cannot be accessed
// before the declaration is initialized.

// let
console.log(product); // ReferenceError

let product = "blush";

// const
console.log(discount); // ReferenceError

const discount = 15;