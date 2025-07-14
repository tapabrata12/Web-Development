// Variables in JavaScript
// Variables are used to store data values. 

// ES5 and earlier versions of JavaScript used the `var` keyword to declare variables.
var myName = "Tapabrata Chowdhury";

var myAge = 30;

console.log(myName);
console.log(myAge);

// According to ES6, we should use let and const instead of var

let myCity = "Kolkata";
console.log(myCity);

// const is used to declare constants, which cannot be reassigned
// It is a good practice to use const for values that should not change.
const PI = 3.14;
console.log(PI);

// Not recomended method

a = 10;
console.log(a);

// Declaration and Initialization

var b; // Declaration
b = 20; // Initialization
console.log(b);

let c; // Declaration
c = 30; // Initialization
console.log(c);

// Disadvantages of using var
    // 1. Adds in window
    // 2. Function scoped
    // 3. Re declaration with same name is allowed. Which can lead to bugs.
    // Example:
var x = 10;
var x = 20; // No error, but can lead to bugs

let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared


