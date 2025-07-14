// Type Coercion in JavaScript
// Type coercion is the automatic or implicit conversion of values from one data type to another.

console.log("5"+1); // "51" - number 1 is coerced to a string
console.log("5"-1); // 4 - string "5" is coerced to a number
console.log("5"*2); // 10 - string "5" is coerced to a number
console.log("5"/2); // 2.5 - string "5" is coerced to a number

// Truthy and Falsy values

// In JavaScript, values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: all other values
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true

// Exercise: 

console.log(true + false); // 1 - true is coerced to 1, false to 0
console.log(null + 1); // 1 - null is coerced to 0, so result is 1
console.log("5" + true); // "5true" - true is coerced to "true", resulting in string concatenation
console.log("5" - true); // 4 - "5" is coerced to number 5, true to 1, so result is 4
console.log(!!undefined);