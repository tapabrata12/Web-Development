// String to Number conversion
let strNum = "123";
console.log(typeof +strNum); // Adding '+' converts string to number
console.log(typeof Number(strNum)); // Using Number() function also converts string to number
console.log(typeof parseInt(strNum)); // Using parseInt() converts string to integer
console.log(typeof parseFloat(strNum)); // Using parseFloat() converts string to float

// Number to String conversion
let num = 123;
console.log(typeof String(num)); // Using String() converts number to string
console.log(typeof(num + "")); // Adding an '+' and empty string converts number to string
console.log(typeof num.toString()); // Using toString() method converts number to string

// Exercise:
let strNum1 = "123.45";
let strNum2 = "007.2";
console.log(parseInt(strNum1)); // Converts "123.45" to 123
console.log(parseInt(strNum2)); // Converts "007.2" to 7
console.log(parseFloat(strNum2)); // Converts "007.2" to 7.2

console.log(parseInt("lfj123")); // Converts "lfj123" to NaN (Not a Number)
console.log(parseInt("123jfl")); // Converts "123jfl" to 123

// Checking if it is a valid number or not
console.log(isNaN(parseInt("lfj123"))); // true, because "lfj123" is not a valid number

console.log(isNaN(parseInt("123"))); // false, because "123" is a valid number