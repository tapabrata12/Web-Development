// What is if else and else if ?

// If-else statement is used to execute different blocks of code based on a condition. It checks the condition and executes the corresponding block of code. And else if is used to check multiple conditions and execute the corresponding block of code.

// Syntax of if-else statement:
// if (condition) {
//     // code to be executed if condition is true
// } else {
    //     // code to be executed if condition is false
    // }

// Syntax of else if statement:

// else if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// }


// Remenber that in the conditional brackets we can use any type of value, but the value must be a boolean value (true or false) Or a value which can be converted into boolean value (like 0 or 1, empty string or not empty string, etc.), Or a function which returns a boolean value.

// Example
if(13>12){
    console.log("13 is greater than 12");
}
else{
    console.log("13 is not greater than 12");
}

// If either the upper cases are not given then it uses truthy values and falsy values to check the condition.

if (50) { // It will print 50 because 50 is truthy value
    console.log("Number is 50");
}
else{
    console.log("Number is not 50");
}

// Example of else if

let a = 10;
if (a===5) {
    console.log("Number is 5");
} 

else if(a===10){
    console.log("Number is 10");
}

else{
    console.log("Number is not 5 or 10");
}