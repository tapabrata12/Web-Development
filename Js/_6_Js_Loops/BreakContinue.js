// Break ends the loop at it's middle at any cost.

// For with break statement
console.log("For Loop with break:")
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// While loop with break statement
console.log("While Loop with break:");
let i = 0;
while (i < 10) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i++;
}

// do-while loop with break statement
console.log("Do-while Loop with break:");
let j = 0;

do{

if (j === 5) {
        break;
    }
console.log(j);
j++;
    
}while (true);


// What is continue statement?
// The continue statement skips the current iteration of a loop and moves on to the next one.
// It is used to skip the execution of the current iteration of a loop and move on to this iteration.
// It is used with for, while, and do-while loops.

// Continue statement with for loop
console.log("Continue Statement with for:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; //Skipping 5
    }
    console.log(i);
}

// Continue statement with while loop
console.log("Continue Statement with while:");
let x = 0;
while (x < 10) {
    if (x === 5) {
        continue; //Skipping 5
    }
    console.log(i);
    x++;
}

// Continue statement with do-while loop
console.log("Continue Statement with do-while: ");
let b = 0;
do {
     if (b === 5) {
        continue; //Skipping 5
    }
    console.log(b);
    b++;
}while (b < 10);