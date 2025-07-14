// What is an operator?
// An operator is a special symbol that performs operations on one, two, or three operands and returns a result.
// Operators are used to perform operations on variables and values.
// In JavaScript, there are different types of operators, including arithmetic, assignment, comparison, logical, bitwise, and more.

// Types of operators in JavaScript:
// 1. Arithmetic Operators: Used to perform mathematical operations.
// 2. Comparison Operators: Used to compare two values.
// 3. Logical Operators: Used to perform logical operations.
// 4. Assignment Operators: Used to assign values to variables.
// 5. Unary Operators: Operate on a single operand.
// 6. Ternary Operator: A shorthand for the if-else statement.
// 7. Bitwise Operators: Used to perform operations on binary representations of numbers.

// 1. Arithmetic Operators

// Addition
let a = 10;
let b = 5;
let sum = a + b; 
console.log("Sum:", sum); // Output: Sum: 15
// This '+' operator can also be use for string concatenation
console.log("Tapabrata"+" "+ "Chowdhury"); // String Concatenation

// Subtraction
let difference = a - b;
console.log("Difference:", difference); // Output: Difference: 5

// Multiplication
let product = a * b;
console.log("Product:", product); // Output: Product: 50

// Division
let quotient = a / b;
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulus (Remainder)
let remainder = a % b;
console.log("Remainder:", remainder); // Output: Remainder: 0

// Exponentiation
let power = a ** b;
console.log("Power:", power); // Output: Power: 100000

// 2. Comparison Operators:

// Equal to
let isEqual = (5 == 5);
console.log("Is Equal:", isEqual); // Output: Is Equal: true
// Problem with '==' is that it performs type coercion, which can lead to unexpected results.
// For example:

console.log(5 == '5'); // Output: true (type coercion occurs) // Solution: Use '===' for strict comparison

// Strict Equal to
let isStrictEqual = (5 === '5');
console.log("Is Strict Equal:", isStrictEqual); // Output: Is Strict Equal: false

// Not Equal
let isNotEqual = (5 != 5);
console.log("Is Not Equal:", isNotEqual); // Output: Is Not Equal: false

// Problem with '!=' is that it performs type coercion, which can lead to unexpected results.
// For example:
console.log(5 != '5'); // Output: false (type coercion occurs) // Solution: Use '!==' for strict comparison

// Strict Not Equal

let isStrictNotEqual = (5 !== '5');
console.log("Is Strict Not Equal:", isStrictNotEqual); // Output: Is Strict Not Equal: true

// Greater than
let isGreater = (5 > 3);
console.log("Is Greater:", isGreater); // Output: Is Greater: true

// Less than
let isLess = (5 < 3);
console.log("Is Less:", isLess); // Output: Is Less: false

// Greater than or Equal to
let isGreaterOrEqual = (5 >= 5);
console.log("Is Greater or Equal:", isGreaterOrEqual); // Output: Is Greater or Equal: true

// Less than or Equal to
let isLessOrEqual = (5 <= 3);
console.log("Is Less or Equal:", isLessOrEqual); // Output: Is Less or Equal: false

// 3. Logical Operators:

// AND
console.log(10>11 && 10>9); // Output: false (both conditions must be true for AND to return true)
console.log(10>9 && 10>8); // Output: true (both conditions are true)

// OR
console.log(10>11 || 10>9); // Output: true (at least one condition must be true for OR to return true)
console.log(10>11 || 10>8); // Output: false (both conditions are false)

// NOT
console.log(!(10 > 11)); // Output: true (NOT operator negates the condition)
console.log(!(10 > 9)); // Output: false (NOT operator negates the condition)

// 4. Assignment Operators:

let x = 10; // Assignment

console.log("Initial value of x:", x); // Output: Initial value of x: 10

// x*= 1; // Equivalent to x = x * 1
// x/= 1; // Equivalent to x = x / 1
// x%= 1; // Equivalent to x = x % 1
// x**= 1; // Equivalent to x = x ** 1
// x*= 1; // Equivalent to x = x * 1

console.log(x*=2); // Output: 20 (x is now 20, equivalent to x = x * 2)
// x/= 2; // Equivalent to x = x / 2
console.log(x/=2); // Output: 10 (x is now 10, equivalent to x = x / 2)
// x%= 2; // Equivalent to x = x % 2
console.log(x%=2); // Output: 0 (x is now 0, equivalent to x = x % 2)
// x**= 2; // Equivalent to x = x ** 2
console.log(x**=2); // Output: 0 (x is now 0, equivalent to x = x ** 2)

// 5. Unary Operators:

// + - ! typeof ++ --

console.log(+'5'); // Output: 5 (Unary plus converts string to number)
console.log(-'5'); // Output: -5 (Unary minus converts string to negative number)
console.log(!'5'); // Output: false (Unary not converts truthy value to false)
console.log(typeof '5'); // Output: string (typeof returns the type of the variable)

// Assignment with addition
// x++
// ++x // Almost same but the difference is that x++ will return the value before incrementing, while ++x will return the value after incrementing.
// x--
// --x // Almost same but the difference is that x-- will return the value before decrementing, while --x will return the value after decrementing.

let c,d;

c = x++; // Postfix increment, c will be 10, x will be 11
console.log("Postfix Increment - c:", c, "x:", x); // Output: Postfix Increment - c: 10 x: 11
x = 10; // Reset x to 10 for the next example
d = ++x; // Prefix increment, d will be 12, x will be 12
console.log("Prefix Increment - d:", d, "x:", x); // Output: Prefix Increment - d: 11 x: 11

x = 10; // Reset x to 10 for the next example
c = x--; // Postfix decrement, c will be 10, x will be 9
console.log("Postfix Decrement - c:", c, "x:", x); // Output: Postfix Decrement - c: 10 x: 9
x = 10; // Reset x to 10 for the next example
d = --x; // Prefix decrement, d will be 8, x will be 8
console.log("Prefix Decrement - d:", d, "x:", x); // Output: Prefix Decrement - d: 9 x: 9

// 6. Ternary Operator:

// ? :

// The syntax of the ternary operator is:
// condition ? expressionIfTrue : expressionIfFalse;

12 > 10 ? console.log(true) : console.log(false);

// instanceof
// The instanceof operator is used to check if an object is an instance of a specific class or constructor function.
// instanceof always works with reference types like objects, arrays, and functions.
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true