console.log("Hello " + "World"); // Output: Hello World

// ⚠️ It is worth noting that the + operator is used for both addition and string concatenation in JavaScript and type coercion can leade to unexpected results so be aware how Javascript handles types of situations.

console.log("Tapabrata" - 5); // Output: NaN
console.log("Tapabrata" + 5); // Output: Tapabrata5

// Example of concatenating String numbers

console.log("5" + 5); // Output: 55
console.log("5" - 5); // Output: 0 because it coerces the string to a number before performing the subtraction
console.log("5" * 5); // Output: 25 because it coerces the string to a number before performing the multiplication
console.log("5" / 5); // Output: 1 because it coerces the string to a number before performing the division

console.log(" " + " "); // Output: "  " (two spaces)
console.log(" " + 0); // Output: " 0"
console.log("Tapabrata"-"Chowdhury"); // Output: NaN (not a number, as subtraction is not defined for strings)

console.log(true + true); // Output: 2 (true is coerced to 1)
console.log(true + false); // Output: 1 (true is coerced to 1 and false to 0)
console.log(false + true); // Output: 1 (false is coerced to 0 and true to 1)
console.log(false - true); // Output: -1 (false is coerced to 0 and true to 1)