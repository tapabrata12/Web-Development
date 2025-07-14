// Dynamic Typing in JavaScript
// We can change the type of a variable at runtime in JavaScript, which is known as dynamic typing. This means that a variable can hold values of different types at different times during the execution of the program.
// Example of dynamic typing

let a = 10; // Initially a number
console.log(a); // Output: 10
console.log(typeof a); // Output: number
a = 10.2; // Now a float
console.log(a); // Output: 10.2
console.log(typeof a); // Output: number
a = "Hello"; // Now a string
console.log(a); // Output: Hello
console.log(typeof a); // Output: string
a = true; // Now a boolean
console.log(a); // Output: true
console.log(typeof a); // Output: boolean

a  = [1,2,3]; // Now an array
console.log(a); // Output: [1, 2, 3]
console.log(typeof a); // Output: object

// ❌ ` int a  = 10;` This is not valid in JavaScript. This is static typing syntax from languages like C or Java.

// ⁉️ typeof quirks 
// What is quirks in Js ?
// In JavaScript, the `typeof` operator can sometimes yield unexpected results due to its design. In future will see some of these quirks.
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)