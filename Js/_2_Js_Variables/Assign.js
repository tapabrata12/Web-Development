// Redeclaration and Reassignment of variables

// Redeclaration is allowed with var, but not with let or const
var x = 30; // Redeclaration with var
console.log(x); // Output: 30
var x = 40; // Redeclaration with var [Not recommended practice]
console.log(x); // Output: 40

let yc = 50; // Declaration and Initialization
// let yc = 60; // Error: Identifier 'yc' has already been declared
console.log(yc); // Output: 50

var z = 10; // Declaration and Initialization
z = 20; // Reassignment
console.log(z);

let w = 30; // Declaration and Initialization
w = 40; // Reassignment
console.log(w);