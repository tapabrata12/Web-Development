// What is Switch case statement:
// The switch case statement is a type of control structure that allows you to execute different blocks of code based on the value of a variable or expression.

// Syntax:
// switch(expression) {
//     case value1:
//         // code to be executed if expression equals value1
//         break;
//     case value2:
//         // code to be executed if expression equals value2
//         break;
//     default:
//         // code to be executed if expression does not match any of the above cases
// }

let choice = 2;

switch (choice) {
    case 1:
        console.log("First choice");
        break;
    case 2:
        console.log("Second Choice");
        break;
    default:
        console.log("Default Choice");
        break;
}

choice = 1;

switch (choice) {
    case 1:
        console.log("First choice");
        break;
    case 2:
        console.log("Second Choice");
        break;
    default:
        console.log("Default Choice");
        break;
}

// If we don't put 'break' statement in switch case, it will execute all the cases below it.
// Run this and see the problem
switch (choice) {
    case 1:
        console.log("First choice");
        
    case 2:
        console.log("Second Choice");
       
    default:
        console.log("Default Choice");
     
}