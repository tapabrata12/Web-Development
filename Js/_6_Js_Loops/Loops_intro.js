// What is Loops ?
// Loops are used to execute a block of code repeatedly for a specified number of times.

// Types of Loops in JavaScript:
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...of Loop
// 5. For...in Loop
// 6. For...each Loop

// 1. For Loop

// If you know where to start where to stop and how to go to the stopping position then for loop will apply 
// I want to print numbers from 1 to 10 using for loop -> where to start: From 1. -> where to stop: 10 -> how to go to the stopping position: increment by 1

// 2. While Loop

// When there is no garentee after how many times the loop will stop but only know when to stop then while loop will apply. 
// Example: I want to print numbers as long as memory is available then while loop will apply. Because we don't know after how many times the memory will full, We only know when to stop


// Syntax of For Loop

// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

for (let index = 0; index <= 10; index++) {
    console.log("Hello world: "+index);
}