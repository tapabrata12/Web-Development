// Hoisting

/*
When a variable is created (Declaration + Initialization) then:

   1. It breaks into two parts:
      - Declaration: The variable is declared but not initialized.
      - Initialization: The variable is assigned a value.

   2. The declaration is moved to the top of the current execution context with the value 'Undefined'.

   3. The initialization part remains in its original position.

Thats why we can access a variable before its declaration, but it will return 'undefined' because the variable is not initialized yet.
*/

console.log(myVar); // Output: undefined
var myVar = 10; // Declaration + Initialization

// let and const variables are not hoisted in the same way as var. They are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20; // Declaration + Initialization

// Actually let told us you can't access me before initialization and like var when let goes to the top it is not initialized with 'undefined' so it throws a ReferenceError.