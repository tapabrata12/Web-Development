// Functions defination: A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).


/*

Function statement: 
A function statement is a function declaration that is not a function expression. It is a function declaration that

function name(params) {
    Code
}

Function Expression:

let a = function() {
    code
}

 Fat arrow function:
 Fat arrow function is a shorthand for function declaration. It is used to define small functions. It is also known as lambda function.

fnc = () => {
  code

*/



function Hello() {
    console.log("Hello World")
}

// Calling

Hello()

// Another way

let a = function() {
    console.log("Hello via another way")
}

a()

// Another way
fnc = () => {
    console.log("Hello via fat arrow function");
    }

fnc()

// Function with parameters
function add(a, b) {
    console.log(a + b);
    }

// Calling the function with parameters and arguments
add(5, 7)