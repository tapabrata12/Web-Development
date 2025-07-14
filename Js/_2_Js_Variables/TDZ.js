// Temporal Dead Zone (TDZ) Example:


console.log(a); // ReferenceError: Cannot access 'a' before initialization
// Temporal Dead Zone of 'a'
// Temporal Dead Zone of 'a'
// Temporal Dead Zone of 'a'
let a = 10;
// Explanation:
// Js knows that a variable is exists but as we are trying to access it before initialization, it throws a ReferenceError. 
// In other words we can also say the area / spaces between the Accessing and declaration + initialization of a variable is called Temporal Dead Zone (TDZ).

// Note: TDZ only applies to variables declared with 'let' and 'const'. Variables declared with 'var' this phenomenon does not apply.
// Example with 'var':
console.log(b); // undefined
var b = 20;