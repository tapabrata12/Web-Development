// Number
var num1 = 5;
console.log(num1); 
// Type check
console.log(typeof num1);

// String
var str1 = "Hello, World!";
console.log(str1);
// Type check
console.log(typeof str1);
// Boolean
var bool1 = true;
console.log(bool1);
// Type check
console.log(typeof bool1);
// Null
var nullVar = null; // Printing 'null' directly will not show the type as 'object' in some environments
console.log(nullVar);
// Type check
console.log(typeof nullVar);
// Undefined
var undefinedVar;
console.log(undefinedVar);
// Type check
console.log(typeof undefinedVar);

// String to Number conversion
var strNum = "123";
console.log(typeof +strNum); // Adding '+' converts string to number
console.log(typeof Number(strNum)); // Using Number() function also converts string to number
console.log(typeof parseInt(strNum)); // Using parseInt() converts string to integer
console.log(typeof parseFloat(strNum)); // Using parseFloat() converts string to float

// Number to String conversion
var num = 123;
console.log(typeof String(num)); // Using String() converts number to string
console.log(typeof(num + "")); // Adding an '+' and empty string converts number to string
console.log(typeof num.toString()); // Using toString() method converts number to string

// Exercise:
var strNum1 = "123.45";
var strNum2 = "007.2";
console.log(parseInt(strNum1)); // Converts "123.45" to 123
console.log(parseInt(strNum2)); // Converts "007.2" to 7
console.log(parseFloat(strNum2)); // Converts "007.2" to 7.2

console.log(parseInt("lfj123")); // Converts "lfj123" to NaN (Not a Number)
console.log(parseInt("123jfl")); // Converts "123jfl" to 123

// Checking if it is a valid number or not
console.log(isNaN(parseInt("lfj123"))); // true, because "lfj123" is not a valid number

console.log(isNaN(parseInt("123"))); // false, because "123" is a valid number