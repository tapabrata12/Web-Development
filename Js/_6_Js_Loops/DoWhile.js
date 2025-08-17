// What is do-while Loop
// A do-while loop is a type of loop that will execute its body at least once before checking the condition.
// It is similar to a while loop, but the condition is checked at the end of the loop instead of the beginning.
// This means that the body of the loop will always be executed at least once.

// Syntax: do-while Loop

// do {
//     // code to be executed
// } while (condition);

let i = 0;

do {
    console.log(i);
    i++;
} while (i<10);

// Spacialiy , It will run atleast once because it will check the condition after the loop body.

console.log("Spaciality:");

i = 5;

do { // Run atleast once
    console.log(i);
    i++;
} while (i<5);