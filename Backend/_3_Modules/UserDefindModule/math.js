/**
 * Here I shall create a user defined module for mathematical operations like addition, subtraction, multiplication, and division.
 */

// Addition function

function add(a,b) {
    return a + b;
}

// Subtraction function
function subtract(a,b) {
    return a - b;
}

// Multiplication function
function multiply(a,b) {
    return a * b;
}

// Division function
function divide(a,b) {
    if(b === 0) {
        throw new Error("Division by zero is not possible.");
    }
    return a / b;
}
// Without this line the functions won't be accessible from other files.
module.exports = {
    add: add,
    sub: subtract,
    mult:multiply,
    div:divide
};
// If key and value are same then we can write it in short form like below
// module.exports = { add, subtract, multiply, divide };