// Scope
// Scope refers to the accessibility of variables and functions in different parts of the code.
// In JavaScript, there are three types of scope: global scope, local scope, and block scope.

// Global Scope
// Variables declared outside of any function or block are in the global scope.
var globalVar = "I am a global variable";
// This variable can be accessed from anywhere in the code, including inside functions.
function globalFunction() {
    console.log(globalVar); // Accessible here
}

globalFunction(); // Output: I am a global variable

// function / Local Scope
// Variables declared inside a function are in the local scope of that function.
function localFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
localFunction(); // Output: I am a local variable
// console.log(localVar); // Error: localVar is not defined (not accessible here)

// Block Scope
// Variables declared inside a block (e.g., inside an if statement or a loop) using let or const are in the block scope.

{
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined (not accessible here)


// Using let or const inside a block creates a block scope. As this keyword obeys block scope, it is not accessible outside the block.
// var keyword does not obey block scope, it is function scoped
{
    var functionScopedVar = "I am 'var' I don't obey block scope. I am function scoped";
}
console.log(functionScopedVar); // Accessible here

// Example of function scope with var
function functionScopeExample() {
    var functionScopedVar = "I am a function scoped variable";
    console.log(functionScopedVar); // Accessible here
}
functionScopeExample(); // Output: I am a function scoped variable

console.log(functionScopedVar); // I am 'var' I don't obey block scope. I am function scoped

// Example of function scope with let
function functionScopeExampleLet() {

    if (true) {
        let a = 5;
        console.log(a); // Accessible here
        
    }
    // console.log(a); // Error: a is not defined (not accessible here)
}
functionScopeExampleLet(); // Output: 5