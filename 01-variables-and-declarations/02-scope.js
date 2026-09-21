// Global scope

var globalVariable = "global";

{
    let blockVariable = "block";
    var varVariable = "var";
    
    console.log(blockVariable);
    console.log(varVariable);
}

console.log(globalVariable);
console.log(varVariable);

// blockVariable cannot be accessed here